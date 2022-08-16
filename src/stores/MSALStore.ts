import axios, { AxiosPromise, AxiosResponse, CancelTokenSource } from 'axios';
import {
    AccountInfo,
    AuthenticationResult,
    InteractionRequiredAuthError,
    PublicClientApplication,
} from '@azure/msal-browser';
import { action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import { API, loginRequest } from '../authConfig';
import { RootStore } from './stores';
import api, { isLive } from '../api/base';
import { umamiReport } from '../helpers/umami';

export class MSALStore {
    private readonly root: RootStore;
    @observable.ref
    account?: AccountInfo;

    @observable.ref
    _msalInstance?: PublicClientApplication;

    @observable
    isApiOffline: boolean = false;

    @observable.ref
    offlineSince?: Date = undefined;

    @observable
    offlineModeConfirmed = false;
    cancelToken: CancelTokenSource = axios.CancelToken.source();

    constructor(root: RootStore) {
        makeObservable(this);
        this.root = root;

        reaction(
            () => this.offlineTimer,
            (offlineTime) => {
                // if (!offlineTime || this.ignoreOfflineState) {
                if (!offlineTime) {
                    return;
                }
                this.cancelToken.cancel();
                this.cancelToken = axios.CancelToken.source();
                isLive(this.cancelToken)
                    .then((res) => {
                        if (res.status === 200) {
                            runInAction(() => {
                                this.setApiOfflineState(false);
                                this.offlineModeConfirmed = false;
                            });
                        }
                    })
                    .catch((err) => {
                        return;
                    });
                if (offlineTime > 20000 && window && !this.offlineModeConfirmed) {
                    const reload = window.confirm(
                        'Die Seite ist seit mehr als 20s offline. Ihre Arbeit kann nicht gespeichert werden. Seite neu laden?'
                    );
                    if (reload) {
                        window.location.reload();
                    } else {
                        runInAction(() => {
                            this.offlineModeConfirmed = true;
                        });
                    }
                }
            }
        );
    }

    @action
    setApiOfflineState(offline: boolean) {
        if (this.isApiOffline !== offline) {
            this.isApiOffline = offline;
            if (offline) {
                this.offlineSince = new Date();
                umamiReport('device-offline', { time: this.offlineSince.toISOString(), userId: this.root.userStore.current.id });
            } else {
                const period = this.offlineSince ? Date.now() - this.offlineSince.getTime() : -1;
                this.offlineSince = undefined;
                umamiReport('device-online-after', { after: period, userId: this.root.userStore.current.id });
            }
        }
    }

    @computed
    get offlineTimer() {
        if (!this.offlineSince) {
            return;
        }
        const tspan = this.root.documentStore.timer - this.offlineSince.getTime();
        return tspan < 0 ? 0 : tspan;
    }

    @computed
    get msalInstance(): PublicClientApplication {
        if (!this._msalInstance) {
            throw 'No MSAL Instance set!';
        }
        return this._msalInstance;
    }

    @action
    setMsalInstance(msalInstance: PublicClientApplication) {
        this._msalInstance = msalInstance;
    }

    @action
    setAccount(account?: AccountInfo) {
        this.account = account;
    }

    @computed
    get loggedIn(): boolean {
        return !!this.account;
    }

    @action
    login() {
        this.msalInstance.loginRedirect(loginRequest).catch((e) => {
            console.warn(e);
        });
    }

    @action
    logout() {
        if (!this.loggedIn) {
            return;
        }
        const logoutRequest = {
            account: this.msalInstance.getAccountByUsername(this.account.username),
        };
        this.msalInstance.logoutRedirect(logoutRequest).catch((e) => {
            console.warn(e);
        });
    }

    @action
    getTokenRedirect(): Promise<void | AuthenticationResult> {
        if (!this.account) {
            throw 'No Login Present!';
        }
        const request = {
            scopes: [`${API}/api/access_as_user`],
            account: this.msalInstance.getAccountByUsername(this.account.username),
        };
        return this.msalInstance.acquireTokenSilent(request).catch((error) => {
            console.error(error);
            console.warn('silent token acquisition fails. acquiring token using popup');
            if (error instanceof InteractionRequiredAuthError) {
                // fallback to interaction when silent call fails
                return this.msalInstance.acquireTokenRedirect(request);
            }
            throw error;
        });
    }

    withToken(): Promise<boolean | void> {
        return this.getTokenRedirect().then((res) => {
            if (res) {
                (api.defaults.headers as any).Authorization = `Bearer ${res.accessToken}`;
                return true;
            }
            console.warn('No Login Token Found');
            return false;
        });
    }
}
