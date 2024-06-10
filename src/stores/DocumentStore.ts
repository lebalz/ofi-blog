import axios, { CancelTokenSource } from 'axios';
import { action, computed, makeObservable, observable, runInAction, reaction } from 'mobx';
import { computedFn } from 'mobx-utils';
import { getDocument, postDocument, Document as DocumentProps } from '../api/document';
import { getDocument as getDocumentAsAdmin } from '../api/admin';
import ArrayAnswer from '../models/Answer/Array';
import StringAnswer from '../models/Answer/String';
import Text from '../models/Answer/Text';
import { DocType, ModelTypes, IModel, TypedDoc, Model } from '../models/iModel';
import Script from '../models/Script';
import { RootStore } from './stores';
import StateAnswer from '../models/Answer/State';
import { RouterType } from '@docusaurus/types';

const CreateModel = (
    data: DocumentProps<any>,
    options: { raw?: string; readonly?: boolean; versioned?: boolean } = {}
) => {
    switch (data.type) {
        case 'array':
            return new ArrayAnswer(data);
        case 'code':
            return new Script(data, options.raw || '', options.readonly, false, options.versioned);
        case 'string':
            return new StringAnswer(data);
        case 'text':
            return new Text(data);
        case 'state':
            return new StateAnswer(data);
        default:
            console.warn('Unknown Document Type', data.type, data);
    }
};

const CreateDummyModel = <T extends IModel = IModel>(
    uid: number,
    type: DocType,
    data: ModelTypes,
    webKey: string,
    readonly: boolean = false,
    isDummy: boolean = false
) => {
    let model: IModel;
    const dummy: DocumentProps<{}> = {
        id: -1,
        user_id: uid,
        web_key: webKey,
        type: type,
        data: data,
        versions: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };
    switch (type) {
        case 'array':
            model = new ArrayAnswer({ ...dummy, versions: [], data: TypedDoc('array', data) });
            break;
        case 'code':
            const c = TypedDoc('code', data);
            model = new Script({ ...dummy, versions: [], data: c }, c.code, readonly, isDummy, false);
            break;
        case 'string':
            model = new StringAnswer({ ...dummy, versions: [], data: TypedDoc('string', data) });
            break;
        case 'text':
            model = new Text({ ...dummy, versions: [], data: TypedDoc('text', data) });
            break;
        case 'state':
            model = new StateAnswer({ ...dummy, versions: [], data: TypedDoc('state', data) });
            break;
    }
    return model as T;
};
export class DocumentStore {
    private readonly root: RootStore;

    static libDir: string = '/bry-libs/';
    static syncMaxOnceEvery: number = 1000;
    static router: RouterType = 'hash';

    documents = observable<Model>([]);

    @observable
    opendGraphicsModalWebKey: string | undefined = undefined;

    @observable initialized: boolean = false;
    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this);
    }

    @computed
    get myDocuments() {
        const myId = this.root.userStore.current.id;
        return this.documents.filter((doc) => doc.userId === myId || doc.userId < 0);
    }

    @computed
    get viewedDocuments() {
        const view = this.root.userStore.currentView;
        if (!view) {
            return this.documents;
        }
        return this.documents.filter((doc) => doc.userId === view.id || doc.userId < 0);
    }

    find = computedFn(
        function <T extends Model = Model>(this: DocumentStore, webKey: string): T {
            return this.viewedDocuments.find((q) => q.webKey === webKey) as T;
        },
        { keepAlive: true }
    );

    findById = computedFn(
        function <T extends Model = Model>(this: DocumentStore, id: number): T {
            return this.documents.find((q) => q.id === id) as T;
        },
        { keepAlive: true }
    );

    @action
    setOpendTurtleModal(webKey: string | undefined) {
        this.opendGraphicsModalWebKey = webKey;
    }

    filterBy = computedFn(
        function <T extends Model = Model>(this: DocumentStore, type: DocType) {
            return this.viewedDocuments.filter((doc) => doc.type === type) as T[];
        },
        { keepAlive: true }
    );

    filterByClass = computedFn(
        function <T extends Model = Model>(this: DocumentStore, klass: string) {
            return this.documents.filter((doc) => this.root.userStore.findById(doc.userId)?.klasse === klass) as T[];
        },
        { keepAlive: true }
    );

    @action
    provideDocument<T extends Model = Model>(
        defaultData: ModelTypes,
        type: DocType,
        pageKey: string | undefined,
        webKey: string,
        persist: boolean,
        readonly?: boolean,
        forceReload?: boolean,
        versioned?: boolean
    ): Promise<T> {
        const loadedModel = this.find<T>(webKey);
        if (loadedModel) {
            if (loadedModel.isLoaded && !forceReload) {
                return Promise.resolve(loadedModel);
            }
            this.documents.remove(loadedModel);
        }
        const model = CreateDummyModel<T>(
            this.root.userStore.currentView?.id || -1,
            type,
            defaultData,
            webKey,
            readonly,
            !persist
        );
        this.documents.push(model);
        if (!persist || !this.root.msalStore.loggedIn || this.root.msalStore.offlineMode) {
            model.isLoaded = true;
            return Promise.resolve(model);
        }
        this.root.adminStore.batchDocument(pageKey, webKey);
        const ct = axios.CancelToken.source();
        const { isMyView } = this.root.userStore;
        return this.apiGetDocument<typeof model.data>(model.webKey, false, ct)
            .then((data) => {
                if (data) {
                    return { data: data, returnDummy: false };
                } else {
                    if (isMyView) {
                        return this.apiCreateDocument(model.webKey, model.type, model.data, ct).then(
                            (data) => {
                                return { data: data, returnDummy: false };
                            }
                        );
                    }
                    return { data: model.props, returnDummy: true };
                }
            })
            .then((data) => {
                if (data.returnDummy) {
                    runInAction(() => {
                        model.isLoaded = true;
                    });
                    return model;
                }
                if (data.data) {
                    const fromApi = CreateModel(data.data, {
                        readonly: readonly,
                        raw: type === 'code' ? TypedDoc('code', defaultData).code : undefined,
                        versioned: versioned,
                    }) as T;
                    fromApi.isLoaded = true;
                    runInAction(() => {
                        fromApi.isLoaded = true;
                        this.documents.remove(model);
                        this.documents.push(fromApi);
                    });
                    return fromApi;
                }
                return model;
            });
    }

    @computed
    get isLoggedIn() {
        return this.root.msalStore.loggedIn;
    }

    @action
    apiGetDocument<T extends Object = Object>(
        webKey: string,
        versions: boolean,
        cancelToken: CancelTokenSource
    ): Promise<DocumentProps<T> | void> {
        return this.root.msalStore.withToken().then((ok) => {
            if (ok) {
                const isOthersView =
                    this.root.userStore.currentView &&
                    this.root.userStore.currentView.id !== this.root.userStore.current?.id;
                if (!isOthersView) {
                    return getDocument<T>(webKey, versions, cancelToken)
                        .then(({ data }) => {
                            return data;
                        })
                        .catch((err) => {
                            if (err.message?.startsWith('Network Error')) {
                                this.root.msalStore.setApiOfflineState(true);
                            } else {
                                return;
                            }
                        });
                }
                return getDocumentAsAdmin<T>(
                    this.root.userStore.currentView.id,
                    webKey,
                    versions,
                    cancelToken
                )
                    .then(({ data }) => {
                        return data;
                    })
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

    @action
    apiCreateDocument<T extends Object = Object>(
        webKey: string,
        type: DocType,
        data: T,
        cancelToken: CancelTokenSource
    ): Promise<DocumentProps<T> | void> {
        return this.root.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    return postDocument<T>(webKey, type, data, cancelToken).then(({ data }) => {
                        return data;
                    });
                }
            })
            .catch((err) => {
                if (err.message?.startsWith('Network Error')) {
                    this.root.msalStore.setApiOfflineState(true);
                } else {
                    return;
                }
            });
    }

    
    @action
    loadOfflineData(data: DocumentProps<IModel>[]) {
        this.documents.replace(data.map((d) => {
            const model = CreateModel(d, {
                readonly: true,
                raw: d.type === 'code' ? TypedDoc('code', {code: ''}).code : undefined
            });
            if (model) {
                model.isLoaded = true;
            }
            return model;
        }).filter(d => !!d));
    }
}
