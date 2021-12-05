import { CancelTokenSource } from 'axios';
import { computed, makeObservable, observable } from 'mobx';
import { Authorization, SolutionPolicy as SolutionPolicyProps } from '../api/solution_policy';
import SaveService, { ApiModel } from './SaveService';

const save = (model: SolutionPolicy, cancelToken: CancelTokenSource) => {
    return Promise.resolve(undefined);
    // return putDocument<PyDoc>(model.webKey, model.data, cancelToken);
};

interface SetDifference {
    added: string[],
    removed: string[]
}

type PolicyColumns = 'class' | 'group' | 'user';
interface PolicyModifier {
    action: 'add' | 'remove';
    auth_type: PolicyColumns;
    values: string[];
}

const diff = (setA: Set<string>, setB: Set<string>): SetDifference => {
    const removed = [...setA].filter(x => !setB.has(x));
    const added = [...setB].filter(x => !setA.has(x));
    return {
        added: added,
        removed: removed
    };
}

const hasDiff = (setDiff: SetDifference) => {
    return setDiff.added.length > 0 || setDiff.removed.length > 0;
}

export default class SolutionPolicy implements ApiModel {
    readonly webKey: string;
    groups = observable.set();
    users = observable.set();
    klasses = observable.set();
    canUpdate: boolean = true;
    saveService: SaveService;
    pristine: {
        groups: Set<string>;
        users: Set<string>;
        klasses: Set<string>;
    };
    constructor(auth: SolutionPolicyProps) {
        this.webKey = auth.web_key;
        this.groups.replace(new Set(auth.authoirzed_groups));
        this.users.replace(new Set(auth.authoirzed_users));
        this.klasses.replace(new Set(auth.authorized_classes));
        this.pristine = {
            users: new Set(auth.authoirzed_users),
            groups: new Set(auth.authoirzed_groups),
            klasses: new Set(auth.authorized_classes),
        };
        makeObservable(this);
        this.saveService = new SaveService(this, save, 0);
    }

    @computed
    get data(): PolicyModifier {
        let authType: 'group' | 'class' | 'user' | undefined = undefined;
        let delta = diff(this.pristine.groups, this.groups);
        if (hasDiff(delta)) {
            authType = 'group';
        } else {
            delta = diff(this.pristine.klasses, this.klasses);
            if (hasDiff(delta)) {
                authType = 'class';
            } else {
                delta = diff(this.pristine.users, this.users);
                if (hasDiff(delta)) {
                    authType = 'user';
                }
            }
        }
        const action = delta.added.length > 0 ? 'add' : 'remove';
        return {
            action,
            auth_type: authType || 'group',
            values: delta.added.length > 0 ? delta.added : delta.removed
        };
    }
}
