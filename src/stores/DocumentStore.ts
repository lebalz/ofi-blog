import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import {
    getDocument,
    postDocument,
    putDocument,
    Document as DocumentProps,
    deleteDocument,
} from '../api/document';
import Document, { DocType } from '../models/Document';
import { RootStore } from './stores';

export class DocumentStore {
    private readonly root: RootStore;
    documents = observable<Document>([]);
    dummyDocs = observable<Document>([]);

    @observable
    timer = 0;

    @observable
    opendTurtleModalWebKey: string | undefined = undefined;

    @observable initialized: boolean = false;
    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this);
        setInterval(action(() => {
            this.timer = Date.now();
        }), 1000);
    }

    find = computedFn(
        function <T extends Object = Object, R extends Object = Object>(this: DocumentStore, webKey: string) {
            return this.documents.find((q) => q.webKey === webKey) as Document<T, R>;
        },
        { keepAlive: true }
    );

    @action
    setOpendTurtleModal(webKey: string | undefined) {
        this.opendTurtleModalWebKey = webKey;
    }

    filterBy = computedFn(
        function <T extends Object = Object, R extends Object = Object>(this: DocumentStore, type: DocType) {
            return this.documents.filter((doc) => doc.type === type) as Document<T, R>[]
        },
        { keepAlive: true }
    )

    @action
    remove(webKey: string) {
        const toRemove = this.find(webKey);
        if (toRemove) {
            toRemove.state.state = 'deleted';
            const cancelToken = axios.CancelToken.source();
            this.apiDeleteDocument(webKey, cancelToken).then(() => {
                runInAction(() => this.documents.remove(toRemove));
            });
        }
    }

    @action
    createOrUpdateDocument<T extends Object = Object>(
        webKey: string,
        type: DocType,
        data: T,
        getLegacyData: () => { data: T | undefined; cleanup?: () => void }
    ): Document<T> {
        const current = this.find<T>(webKey);
        if (current) {
            current.setData(data);
            return current;
        }
        const doc = new Document(this, webKey, type, getLegacyData, data);
        this.documents.push(doc);
        return doc;
    }

    @computed
    get isLoggedIn() {
        return this.root.msalStore.loggedIn;
    }

    @action
    getOrCreateDocument<T extends Object = Object, R extends Object = Object>(
        webKey: string,
        type: DocType,
        defaultData: T,
        getLegacyData: () => { data: T | undefined; cleanup?: () => void }
    ): Document<T, R> {
        const current = this.find<T, R>(webKey);
        if (current) {
            return current;
        }
        const doc = new Document<T, R>(this, webKey, type, getLegacyData, defaultData);
        this.documents.push(doc);
        setTimeout(
            action(() => {
                this.removeDummy(webKey);
            }),
            1
        );
        return doc;
    }

    @action
    getOrCreateDummyDoc<T extends Object = Object, R extends Object = Object>(
        webKey: string,
        type: DocType,
        defaultData: T
    ): Document<T, R> {
        const current = this.dummyDocs.find((q) => q.webKey === webKey) as Document<T, R>;
        if (current) {
            return current;
        }
        const doc = new Document<T, R>(this, webKey, type, () => undefined, defaultData, true, false);
        this.dummyDocs.push(doc);
        return doc;
    }

    @action
    removeDummy(webKey: string) {
        const toRemove = this.dummyDocs.find((q) => q.webKey === webKey);
        if (toRemove) {
            this.dummyDocs.remove(toRemove);
        }
    }

    @action
    apiGetDocument<T extends Object = Object>(
        webKey: string,
        cancelToken: CancelTokenSource
    ): Promise<DocumentProps<T> | void> {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                return getDocument<T>(webKey, cancelToken).then(({ data }) => {
                    return data;
                });
            }
        });
    }

    @action
    apiCreateDocument<T extends Object = Object>(
        webKey: string,
        type: DocType,
        data: T,
        cancelToken: CancelTokenSource
    ): Promise<DocumentProps<T> | void> {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                return postDocument<T>(webKey, type, data, cancelToken).then(({ data }) => {
                    return data;
                });
            }
        });
    }

    @action
    apiDeleteDocument(webKey: string, cancelToken: CancelTokenSource) {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                return deleteDocument(webKey, cancelToken);
            }
        });
    }

    @action
    apiUpdateDocument<T extends Object = Object>(document: Document<T>, cancelToken: CancelTokenSource) {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                if (window && (window as any).umami) {
                    (window as any).umami.trackEvent(`${document.webKey}`, `update-doc-${document.type}`);
                }
                return putDocument<T>(document.webKey, document.data, cancelToken);
            }
        });
    }
}
