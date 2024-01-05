import { action, computed, makeObservable, observable, ObservableMap } from 'mobx';
import { computedFn } from 'mobx-utils';
import { Document as DocumentProps } from '../api/document';
import { RootStore } from './stores';
import BatchLoadService from '../models/BatchLoadService';
import { DocType, Model } from '../models/iModel';
import User from '../models/User';
import StateAnswer, { StateDoc } from '../models/Answer/State';

export const VIEW_ELEMENTS = [
    'task_state',
    'page_state_summary',
    'policy_opts',
    'show_solutions',
    'view_switcher',
] as const;

export type ViewElement = typeof VIEW_ELEMENTS[number];

export class AdminStore {
    private readonly root: RootStore;
    @observable.ref
    batchLoader: BatchLoadService;

    documents = observable.map<string, ObservableMap<string, DocumentProps<any>[]>>(undefined, {
        deep: false,
    });

    @observable
    showTaskStates = false;

    @observable
    showTaskStateSummary = false;

    @observable
    showViewSwitcher = true;

    @observable
    showPolicyOptions = false;

    @observable
    showSolutions = false;

    @observable
    viewGroupFilter?: string = undefined;

    @observable initialized: boolean = false;
    constructor(root: RootStore) {
        this.root = root;
        this.batchLoader = new BatchLoadService(500, root);
        makeObservable(this);
    }

    @action
    toggleAdminElements(element: ViewElement) {
        switch (element) {
            case 'task_state':
                this.showTaskStates = !this.showTaskStates;
                break;
            case 'page_state_summary':
                this.showTaskStateSummary = !this.showTaskStateSummary;
                break;
            case 'view_switcher':
                this.showViewSwitcher = !this.showViewSwitcher;
                break;
            case 'policy_opts':
                this.showPolicyOptions = !this.showPolicyOptions;
                break;
            case 'show_solutions':
                this.showSolutions = !this.showSolutions;
                break;
        }
    }

    showAdminElement(element: ViewElement) {
        switch (element) {
            case 'task_state':
                return this.showTaskStates;
            case 'page_state_summary':
                return this.showTaskStateSummary;
            case 'view_switcher':
                return this.showViewSwitcher;
            case 'policy_opts':
                return this.showPolicyOptions;
            case 'show_solutions':
                return this.showSolutions;
        }
    }

    @computed
    get isAdmin(): boolean {
        return !!this.root.userStore.current?.admin;
    }

    @action
    batchDocument(pageKey: string | undefined, webKey: string) {
        if (!pageKey) {
            return;
        }
        this.batchLoader.push(pageKey, webKey);
    }

    find = computedFn(
        function (this: AdminStore, klasse: string, pageKey?: string): DocumentProps<any>[] {
            if (!pageKey && !klasse) {
                return [];
            }
            if (!this.documents.has(klasse)) {
                return [];
            }
            if (!pageKey) {
                return [...this.documents.get(klasse).values()].flat();
            }
            if (!this.documents.get(klasse).has(pageKey)) {
                return [];
            }
            return this.documents.get(klasse).get(pageKey);
        },
        { keepAlive: true }
    );

    userById(id: number): User | undefined {
        return this.root.userStore.findById(id);
    }

    filteredBy<T>(klasse: string, pageKey: string, type: DocType): DocumentProps<T>[] {
        return this.find(klasse, pageKey).filter((doc) => doc.type === type);
    }

    findByWebKey<T>(klasse: string, webKey: string): DocumentProps<T>[] {
        const docs = this.find(klasse, undefined).filter((doc) => doc.web_key === webKey);
        docs.sort((a, b) => {
            const aName = this.userById(a.user_id)?.name;
            const bName = this.userById(b.user_id)?.name;
            if (!aName && !bName) {
                return 0;
            }
            if (!aName) {
                return -1;
            }
            if (!bName) {
                return 1;
            }
            if (aName < bName) {
                return -1;
            }
            if (aName > bName) {
                return 1;
            }
            return 0;
        });
        return docs;
    }

    getUser(userId: number): User | undefined {
        return this.root.userStore.findById(userId);
    }

    @action
    setDocuments(klasse: string, pageKey: string, docs: DocumentProps<any>[]) {
        if (!this.documents.has(klasse)) {
            this.documents.set(klasse, observable.map(undefined, { deep: false }));
        }
        const ordered = docs.sort((a, b) => ((this.findMyDocument<StateAnswer>(a.web_key)?.windowPositionY || -1) - (this.findMyDocument<StateAnswer>(b.web_key)?.windowPositionY || -1)));
        this.documents.get(klasse).set(pageKey, ordered);
    }

    @action
    setView(userId: number) {
        this.root.userStore.setView(this.root.userStore.findById(userId));
    }

    @action
    setViewGroupFilter(group: string) {
        this.viewGroupFilter = group;
    }

    @action
    clearViewGroupFilter() {
        this.viewGroupFilter = undefined;
    }


    findMyDocument = computedFn(
        function <T extends Model = Model>(this: AdminStore, webKey: string): T {
            return this.root.documentStore.myDocuments.find((q) => q.webKey === webKey) as T;
        },
        { keepAlive: true }
    );
}
