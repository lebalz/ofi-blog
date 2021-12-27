import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { user as fetchUser } from '../api/user';
import { setUserProps, users as fetchUsers } from '../api/admin';
import User from '../models/User';
import { RootStore } from './stores';
import _ from 'lodash';
import axios from 'axios';

export class UserStore {
    private readonly root: RootStore;
    users = observable<User>([]);
    unpersistedGroups = observable<string>([]);
    unpersistedKlasses = observable<string>([]);
    @observable.ref
    currentView?: User = undefined;

    @observable
    filterKlasse?: string;

    @observable
    filterEmailOrder: 'asc' | 'desc' = 'asc';

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

    @computed
    get filteredUsers(): User[] {
        if (!this.current?.admin) {
            return [];
        }
        let filtered = this.filterKlasse
            ? this.byClass(this.filterKlasse).filter((u) => !!u.klasse)
            : this.users.slice();
        filtered = _.orderBy(filtered, ['email'], [this.filterEmailOrder]);
        return filtered;
    }

    @computed
    get klasses(): string[] {
        const cls = this.users.reduce((p, u) => [...p, u.klasse], [...this.unpersistedKlasses]);
        const uniq = new Set(cls);
        console.log(Array.from(uniq));
        return Array.from(uniq);
    }

    @computed
    get groups(): string[] {
        const grps = this.users.reduce((p, u) => [...p, ...u.groups], [...this.unpersistedGroups]);
        const uniq = new Set(grps);
        return Array.from(uniq);
    }

    @action
    createGroup(group: string) {
        this.unpersistedGroups.push(group);
    }

    @action
    createKlass(klass: string) {
        this.unpersistedKlasses.push(klass);
    }

    @action
    setKlasse(user: User, klass: string) {
        user.isOutdated = true;
        setUserProps(
            user.id,
            {
                class: klass,
            },
            axios.CancelToken.source()
        ).then(
            action((data) => {
                this.users.remove(user);
                this.users.push(new User(data.data));
            })
        );
    }

    @action
    addGroup(user: User, group: string) {
        user.isOutdated = true;
        setUserProps(
            user.id,
            {
                groups: [...user.groups, group],
            },
            axios.CancelToken.source()
        ).then(
            action((data) => {
                this.users.remove(user);
                this.users.push(new User(data.data));
            })
        );
    }

    @action
    removeGroup(user: User, group: string) {
        user.isOutdated = true;
        setUserProps(
            user.id,
            {
                groups: user.groups.filter((g) => g !== group),
            },
            axios.CancelToken.source()
        ).then(
            action((data) => {
                this.users.remove(user);
                this.users.push(new User(data.data));
            })
        );
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
                            const ordered = _.orderBy(data, ['email']).filter(u => u.email !== current.email).map(u => new User(u));
                            ordered.forEach((user) => {
                                this.users.push(user);
                            });
                            this.unpersistedGroups.replace(this.groups);
                            this.unpersistedKlasses.replace(this.klasses);
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
