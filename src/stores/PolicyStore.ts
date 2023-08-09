import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { getSolutionAuthorizationAsAdmin, solutionPolicies, updateSolutionPolicy } from '../api/admin';
import { RootStore } from './stores';
import {
    Authorization,
    authorized,
    PolicyModifier,
    postSolutionPolicy,
    SolutionPolicy as SolutionPolicyProps,
    SolutionPolicyData,
} from '../api/solution_policy';
import SolutionAuthorization from '../models/SolutionAuthorization';
import SolutionPolicy from '../models/SolutionPolicy';

const VERSION_REGEX = /^\/\d{2}.\//;

const getDocUrl = () => {
    try {
        const loc = window.location.href.replace(window.location.origin, '').replace(/#.*/, '');
        if (VERSION_REGEX.test(loc)) {
            return loc.replace(VERSION_REGEX, '/');
        }
        return loc;
    } catch (e) {
        return '';
    }
};

export class PolicyStore {
    private readonly root: RootStore;
    authorizations = observable<SolutionAuthorization>([]);
    policies = observable<SolutionPolicy>([]);

    @observable initialized: boolean = false;
    @observable
    openPolicyConfigWebKey = '';

    constructor(root: RootStore) {
        this.root = root;
        reaction(
            () => this.root.userStore.current,
            (account) => {
                if (this.root.msalStore.offlineMode) {
                    this.policies.replace([]);
                    this.authorizations.replace([]);
                    return;
                }
                this.reload();
            }
        );
        makeObservable(this);
    }

    @action
    setOpenPolicyConfigWebKey(webKey: string) {
        this.openPolicyConfigWebKey = webKey;
    }

    @computed
    get viewedAuthorizations() {
        const view = this.root.userStore.currentView;
        if (!view) {
            return this.authorizations;
        }
        return this.authorizations.filter((auth) => auth.userId === view.id || auth.userId < 0);
    }

    find = computedFn(
        function (this: PolicyStore, webKey: string): SolutionAuthorization | undefined {
            return this.viewedAuthorizations.find((q) => q.webKey === webKey);
        },
        { keepAlive: true }
    );

    findPolicy = computedFn(
        function (this: PolicyStore, webKey: string): SolutionPolicy | undefined {
            return this.policies.find((q) => q.webKey === webKey);
        },
        { keepAlive: true }
    );

    @computed
    get groups(): string[] {
        const grps = this.policies.reduce((g, p) => [...g, ...p.groups], []);
        return Array.from(grps);
    }

    @action
    provideAuthorization(webKey: string, forceReload?: boolean): Promise<SolutionAuthorization> {
        const loadedAuth = this.find(webKey);
        if (loadedAuth) {
            if (loadedAuth.loaded && !forceReload) {
                return Promise.resolve(loadedAuth);
            }
            this.authorizations.remove(loadedAuth);
        }
        const model = new SolutionAuthorization({
            web_key: webKey,
            show: false,
            user_id: this.root.userStore.currentView?.id || -1,
        });
        this.authorizations.push(model);
        if (!this.root.msalStore.loggedIn) {
            model.loaded = true;
            return Promise.resolve(model);
        }
        const ct = axios.CancelToken.source();
        return this.apiFetchAuthorizationFor(model.webKey, ct)
            .then((data) => {
                if (data) {
                    return data;
                } else {
                    return this.apiCreateSolutionAuthorization(
                        {
                            web_key: model.webKey,
                            document_url: getDocUrl(),
                        },
                        ct
                    ).then((data) => {
                        return {
                            web_key: model.webKey,
                            show: this.root.userStore.current?.admin,
                            user_id: model.userId,
                        };
                    });
                }
            })
            .then((data) => {
                if (data) {
                    const fromApi = new SolutionAuthorization(data);
                    runInAction(() => {
                        fromApi.loaded = true;
                        this.authorizations.remove(model);
                        this.authorizations.push(fromApi);
                    });
                    return fromApi;
                }
                return model;
            });
    }

    @action
    reload() {
        this.policies.replace([]);
        this.authorizations.replace([]);
        if (this.root.msalStore.account) {
            this.loadPolicies();
        }
    }

    @action
    loadPolicies() {
        if (!this.root.userStore.current?.admin) {
            return;
        }
        this.root.msalStore.withToken().then((ok) => {
            solutionPolicies()
                .then(
                    action(({ data }) => {
                        const current = this.root.userStore.current;
                        if (current?.admin) {
                            this.policies.replace(
                                data.map((prop) => {
                                    return new SolutionPolicy(prop, this);
                                })
                            );
                        }
                    })
                )
                .catch((err) => {
                    if (!err.response) {
                        this.root.msalStore.setApiOfflineState(true);
                    } else {
                        return;
                    }
                });
        });
    }

    @computed
    get isLoggedIn() {
        return this.root.msalStore.loggedIn;
    }

    @action
    updatePolicy(policy: SolutionPolicy, delta: PolicyModifier) {
        if (policy.locked) {
            return;
        }
        policy.setLocked(true);
        const ct = axios.CancelToken.source();
        this.apiUpdateAuthorization(policy.webKey, delta, ct).then(
            action((res) => {
                if (res) {
                    this.policies.remove(policy);
                    this.policies.push(new SolutionPolicy(res, this));
                } else {
                    // error happend - unlock
                    policy.setLocked(false);
                }
            })
        );
    }

    @action
    private apiFetchAuthorizationFor(webKey: string, cancelToken: CancelTokenSource): Promise<Authorization> {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                const isOthersView =
                    this.root.userStore.currentView &&
                    this.root.userStore.currentView.id !== this.root.userStore.current?.id;
                if (!isOthersView) {
                    return authorized(webKey, cancelToken)
                        .then(({ data }) => {
                            return data;
                        })
                        .catch((err) => {
                            if (err.message?.startsWith('Network Error')) {
                                this.root.msalStore.setApiOfflineState(true);
                            } else {
                                return undefined;
                            }
                        });
                }
                return getSolutionAuthorizationAsAdmin(
                    this.root.userStore.currentView.id,
                    webKey,
                    cancelToken
                )
                    .then(({ data }) => {
                        return data;
                    })
                    .catch((err) => {
                        if (err.message?.startsWith('Network Error')) {
                            this.root.msalStore.setApiOfflineState(true);
                        } else {
                            return undefined;
                        }
                    });
            }
        });
    }

    @action
    private apiCreateSolutionAuthorization(
        data: SolutionPolicyData,
        cancelToken: CancelTokenSource
    ): Promise<void | SolutionPolicyProps> {
        return this.root.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    return postSolutionPolicy(data, cancelToken).then(({ data }) => {
                        return data;
                    });
                }
            })
            .catch((err) => {
                if (err.message?.startsWith('Network Error')) {
                    this.root.msalStore.setApiOfflineState(true);
                } else {
                    return undefined;
                }
            });
    }

    @action
    private apiUpdateAuthorization(
        webKey: string,
        delta: PolicyModifier,
        cancelToken: CancelTokenSource
    ): Promise<void | SolutionPolicyProps> {
        return this.root.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    return updateSolutionPolicy(webKey, delta, cancelToken);
                }
            }).then((res) => {
                if (res) {
                    return res.data;
                } else {
                    throw new Error('No data provided')
                }
            })
            .catch((err) => {
                if (err.message?.startsWith('Network Error')) {
                    this.root.msalStore.setApiOfflineState(true);
                } else {
                    return undefined;
                }
            });
    }
}
