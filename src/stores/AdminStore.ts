import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction, reaction, ObservableMap } from 'mobx';
import { computedFn } from 'mobx-utils';
import { getDocument, postDocument, Document as DocumentProps } from '../api/document';
import { getDocument as getDocumentAsAdmin } from '../api/admin';
import ArrayAnswer from '../models/Answer/Array';
import { RootStore } from './stores';
import BatchLoadService from '../models/BatchLoadService';
import { DocType } from '../models/iModel';
import User from '../models/User';

export class AdminStore {
    private readonly root: RootStore;
    @observable.ref
    batchLoader: BatchLoadService;
    documents = observable.map<string, ObservableMap<string, DocumentProps<any>[]>>(undefined, { deep: false });

    @observable
    showAdminElements = true;

    @observable initialized: boolean = false;
    constructor(root: RootStore) {
        this.root = root;
        this.batchLoader = new BatchLoadService(500, root);
        makeObservable(this);
    }

    @action
    toggleAdminElements() {
        this.showAdminElements = !this.showAdminElements;
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

    find(klasse: string, pageKey?: string): DocumentProps<any>[] {
        if (!pageKey) {
            return [];
        }
        if (!this.documents.has(klasse)) {
            return [];
        }    
        if (!this.documents.get(klasse).has(pageKey)) {
            return [];
        }
        return this.documents.get(klasse).get(pageKey);
    }

    filteredBy<T>(klasse: string, pageKey: string, type: DocType): DocumentProps<T>[] {
        return this.find(klasse, pageKey).filter(doc => doc.type === type);
    }

    getUser(userId: number): User | undefined {
        return this.root.userStore.findById(userId);
    }


    @action
    setDocuments(klasse: string, pageKey: string, docs: DocumentProps<any>[]) {
        if (!this.documents.has(klasse)) {
            this.documents.set(klasse, observable.map(undefined, { deep: false }));
        }
        this.documents.get(klasse).set(pageKey, docs);
    }
}
