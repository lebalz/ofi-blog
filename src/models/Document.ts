import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import axios, { CancelTokenSource, Method } from 'axios';
import { debounce } from 'lodash';
import { action, computed, IReactionDisposer, makeObservable, observable, reaction, runInAction } from 'mobx';
import { Document as DocumentProps } from '../api/document';
import { DocumentStore } from '../stores/DocumentStore';

type RequestState = 'init' | 'save' | 'done' | 'pending' | 'deleted' | 'error';
class ApiState {
    @observable
    method: Method;

    @observable
    state: RequestState;

    cancelToken: CancelTokenSource = axios.CancelToken.source();

    constructor(method: Method, state: RequestState = 'init') {
        this.method = method;
        this.state = state;
        makeObservable(this);
    }

    @action
    setState(state: RequestState) {
        this.state = state;
    }

    @action
    cancelApiRequests() {
        this.cancelToken.cancel('Requests canceled');
        this.cancelToken = axios.CancelToken.source();
    }
}

export type DocType = 'code' | 'string' | 'text' | 'array' | 'tdoc';

export default class Document<T extends Object = Object> {
    protected readonly store: DocumentStore;

    iDisposer: IReactionDisposer;

    type: DocType;

    @observable id: number = -1;
    @observable userId: number = -1;
    @observable webKey: string;
    @observable.ref
    pristine: T = {} as T;
    @observable createdAt: Date = new Date();
    @observable
    updatedAt: Date = new Date();
    @observable
    loaded: boolean = false;

    @observable
    isOffline: boolean = false;

    @observable.ref
    data: T = {} as T;

    @observable.ref
    state: ApiState;

    @observable
    isDummy: boolean;

    isReadonly: boolean = false;

    @observable.ref
    legacyData?: T;
    legacyCleanup?: () => void;

    constructor(
        store: DocumentStore,
        webKey: string,
        type: DocType,
        getLegacyData: () => { data: T | undefined; cleanup?: () => void },
        data?: T,
        isDummy: boolean = false,
        readonly: boolean = false
    ) {
        this.type = type;
        this.store = store;
        this.webKey = webKey;
        this.isDummy = isDummy || !store.isLoggedIn;
        this.isReadonly = readonly;
        const legacy = getLegacyData();
        if (legacy) {
            this.legacyData = legacy.data;
            this.legacyCleanup = legacy.cleanup;
        }
        let usedLegacy = false;
        if (data) {
            this.data = data;
        }
        if (this.isDummy) {
            this.setLoaded(true);
        } else {
            this.state = new ApiState('get');
            this.store.apiGetDocument<T>(this.webKey, this.state.cancelToken).then(
                action((docProps) => {
                    if (docProps) {
                        this.updateProps(docProps);
                        this.state.state = 'done';
                        this.setLoaded(true);
                    } else if (this.legacyData || data) {
                        this.state.method = 'post';
                        if (this.legacyData) {
                            usedLegacy = true;
                        }
                        this.store
                            .apiCreateDocument(
                                this.webKey,
                                this.type,
                                this.legacyData || data,
                                this.state.cancelToken
                            )
                            .then(
                                action((newDoc) => {
                                    if (newDoc) {
                                        this.updateProps(newDoc);
                                        if (usedLegacy) {
                                            runInAction(() => (this.legacyData = undefined));
                                            if (this.legacyCleanup) {
                                                this.legacyCleanup();
                                            }
                                        }
                                        this.state.state = 'done';
                                        this.setLoaded(true);
                                    }
                                })
                            );
                    } else {
                        this.state.state = 'error';
                        this.setLoaded(false);
                    }
                })
            );
        }

        makeObservable(this);
    }

    static formatDate(date: Date) {
        return date.toLocaleString();
    }

    @action
    resolveLegacyDoc(action: 'use_legacy' | 'use_current') {
        if (!this.legacyData) {
            return;
        }
        if (action === 'use_legacy') {
            this.setData(this.legacyData, true).then((res) => {
                if (res.data && res.data.state === 'ok') {
                    runInAction(() => {
                        this.legacyData = undefined;
                        if (this.legacyCleanup) {
                            this.legacyCleanup();
                        }
                    });
                }
            });
        } else {
            this.legacyData = undefined;
            if (this.legacyCleanup) {
                this.legacyCleanup();
            }
        }
    }

    @action
    private setLoaded(loaded: boolean) {
        this.loaded = loaded;
    }

    @computed
    get isCreated() {
        return this.id !== -1;
    }

    @action
    saveNow() {
        this.save();
        this.save.flush();
    }

    @action
    protected _save() {
        if (this.isDummy) {
            return Promise.resolve({
                updated_at: new Date().toISOString(),
                state: 'ok',
            });
        }
        if (this.isCreated) {
            this.state.cancelApiRequests();
            this.state.setState('save');
            return this.store
                .apiUpdateDocument<T>(this, this.state.cancelToken)
                .then((res) => {
                    this.setOfflineState(false);
                    this.state.setState('done');
                    return res;
                })
                .catch((error) => {
                    console.warn('err', error);
                    this.state.setState('error');
                    this.setOfflineState(true);
                });
        }
        return Promise.resolve({
            state: 'error',
            message: 'Document not created yet',
        });
    }

    save = debounce(this._save, 1000, { leading: false, trailing: true, maxWait: 5000 });

    @action
    setOfflineState(offline: boolean) {
        if (this.isOffline === offline) {
            return;
        }
        this.isOffline = offline;
    }

    @action
    setData(data: T, flush?: boolean) {
        this.data = data;
        this.updatedAt = new Date();
        this.save();
        if (flush) {
            return this.save.flush();
        }
    }

    @action
    delete() {
        if (this.isDummy) {
            this.loaded = false;
            this.store.removeDummy(this.webKey);
            return;
        }
        this.state.state = 'deleted';
        this.loaded = false;
        this.store.remove(this.webKey);
    }

    @action
    protected updateProps(props: DocumentProps<T>) {
        this.id = props.id;
        this.userId = props.user_id;
        this.webKey = props.web_key;
        this.pristine = props.data;
        this.data = props.data;
        this.createdAt = new Date(props.created_at);
        this.updatedAt = new Date(props.updated_at);
    }

    @computed
    get props(): DocumentProps<T> {
        return {
            id: this.id,
            user_id: this.userId,
            web_key: this.webKey,
            type: this.type,
            data: this.data,
            created_at: this.createdAt.toISOString(),
            updated_at: this.updatedAt.toISOString(),
        };
    }
}
