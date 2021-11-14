import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { user as fetchUser } from '../api/user';
import { users as fetchUsers } from '../api/admin';
import User from '../models/User';
import { RootStore } from './stores';
import _ from 'lodash';

export class UserStore {
    private readonly root: RootStore;
    users = observable<User>([]);
    @observable.ref
    currentView?: User = undefined;

    @observable
    opendTurtleModalWebKey: string | undefined = undefined;

    @observable initialized: boolean = false;
    constructor(root: RootStore) {
        this.root = root;
        reaction(
            () => this.root.msalStore.account,
            (account) => {
                this.reload();
            }
        );
        reaction(
            () => this.root.msalStore.isApiOffline,
            (isOffline) => {
                if (!isOffline) {
                    this.reload();
                }
            }
        );
        makeObservable(this);
    }

    @action
    reload() {
        this.users.replace([]);
        if (this.root.msalStore.account) {
            this.root.msalStore.withToken().then((ok) => {
                if (ok) {
                    fetchUser()
                        .then(
                            action(({ data }) => {
                                const user = new User(data);
                                this.users.push(user);
                                this.setView(user);
                                this.loadUsers();
                            })
                        )
                        .catch((err) => {
                            if (err.message?.startsWith('Network Error')) {
                                this.root.msalStore.setApiOfflineState(true);
                            } else {
                                return;
                            }
                        });
                }
            });
        }
    }

    @action
    loadUsers() {
        if (!this.current?.admin) {
            return;
        }
        this.root.msalStore.withToken().then((ok) => {
            fetchUsers()
                .then(
                    action(({ data }) => {
                        const current = this.current;
                        if (current?.admin) {
                            const ordered = _.orderBy(data, ['email']);
                            ordered.forEach((user) => {
                                if (user.email !== current.email) {
                                    this.users.push(new User(user));
                                }
                            });
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
    get current(): User | undefined {
        return this.find(this.root.msalStore.account?.username);
    }

    @computed
    get isMyView(): boolean {
        if (!this.root.msalStore.loggedIn || !this.current) {
            return true;
        }
        if (!this.current.admin) {
            return true;
        }
        return this.current.id === this.currentView?.id;
    }

    @action
    setView(user?: User) {
        if (!user) {
            this.currentView = this.current;
        }
        this.currentView = user;
    }

    find = computedFn(
        function (this: UserStore, email?: string): User | undefined {
            if (!email) {
                return;
            }
            const mail = email.toLowerCase().trim();
            return this.users.find((user) => user.email === mail);
        },
        { keepAlive: true }
    );

    byClass = computedFn(
        function (this: UserStore, klasse?: string): User[] {
            if (!klasse) {
                return this.users;
            }
            return this.users.filter((u) => !u.klasse || u.klasse === klasse);
        },
        { keepAlive: true }
    );
}
