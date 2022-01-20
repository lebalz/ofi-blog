import { CancelTokenSource } from 'axios';
import { computed, makeObservable, observable, action } from 'mobx';
import { Authorization, SolutionPolicy as SolutionPolicyProps } from '../api/solution_policy';
import { PolicyStore } from '../stores/PolicyStore';


interface SetDifference {
    added: string[],
    removed: string[]
}

type PolicyColumns = 'class' | 'group' | 'user';

export default class SolutionPolicy {
    readonly webKey: string;
    readonly store: PolicyStore;
    readonly groups: Set<string>;
    readonly users: Set<string>;
    readonly klasses: Set<string>;
    @observable
    locked: boolean = false;

    constructor(auth: SolutionPolicyProps, store: PolicyStore) {
        this.webKey = auth.web_key;
        this.store = store;
        this.groups = new Set(auth.authorized_groups);
        this.users = new Set(auth.authorized_users);
        this.klasses = new Set(auth.authorized_classes);
        makeObservable(this);
    }

    @computed
    get isConfigOpen() {
        return this.store.openPolicyConfigWebKey === this.webKey;
    }

    @action
    showConfig(open: boolean) {
        this.store.setOpenPolicyConfigWebKey(open ? this.webKey : '');
    }

    @action
    setLocked(locked: boolean) {
        this.locked = locked;
    }

    @action
    addPermission(for_: string, in_:  PolicyColumns) {
        this.store.updatePolicy(
            this,
            {
                action: 'add',
                auth_type: in_,
                values: [for_]
            }
        )
    }

    @action
    removePermission(from_: string, in_:  PolicyColumns) {
        this.store.updatePolicy(
            this,
            {
                action: 'remove',
                auth_type: in_,
                values: [from_]
            }
        )
    }

}
