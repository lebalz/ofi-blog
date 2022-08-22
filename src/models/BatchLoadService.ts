import axios, { CancelTokenSource } from 'axios';
import { debounce, DebouncedFunc } from 'lodash';
import { action, computed, IReactionDisposer, makeObservable, observable } from 'mobx';
import { getAllDocumentsByClass } from '../api/admin';
import { RootStore } from '../stores/stores';
type RequestState = 'init' | 'save' | 'done' | 'pending' | 'deleted' | 'error';


export default class BatchLoadService {
    private readonly tDebounce: number;
    private readonly rootStore: RootStore;
    private load: DebouncedFunc<() => Promise<any>>;
    cancelToken: CancelTokenSource = axios.CancelToken.source();
    disposer: IReactionDisposer;
    state: RequestState = 'init';
    currentPageKey?: string = undefined; 

    loadKeys = observable.set<string>([]);

    constructor(tDebounce: number = 1000, rootStore: RootStore) {
        this.tDebounce = tDebounce;
        this.rootStore = rootStore;
        this.load = debounce(action(this._load), this.tDebounce, { leading: false, trailing: true, maxWait: 5000 });

        makeObservable(this);
    }

    @action
    push(pageKey: string, webKey: string) {
        if (!this.currentPageKey) {
            this.currentPageKey = pageKey;
        }
        if (this.currentPageKey !== pageKey) {
            console.log('page key missmatch, cancel!', this.currentPageKey, pageKey);
            this.load.cancel();
            this.loadKeys.clear();
        }
        this.currentPageKey = pageKey;
        this.loadKeys.add(webKey);
        this.load();
    }

    @action
    cleanup() {
        this.disposer();
    }

    @computed
    get isOffline() {
        return this.rootStore.msalStore.isApiOffline;
    }

    @action
    cancelApiRequests() {
        this.cancelToken.cancel('Requests canceled');
        this.cancelToken = axios.CancelToken.source();
    }

    @action
    _load() {
        if (this.loadKeys.size < 1 || !this.currentPageKey) {
            return;
        }
        if (!this.rootStore.msalStore.loggedIn || !this.rootStore.adminStore.isAdmin) {
            return;
        }
        const baseUrl = '/';
        const klass = window.location.pathname.replace(baseUrl, '').split('/')[0];
        const pageKey = this.currentPageKey;
        
        this.cancelApiRequests();
        this.state = 'pending';
        const keys = [...this.loadKeys.values()];
        this.loadKeys.clear();

        return this.rootStore.msalStore
            .withToken()
            .then((ok) => {
                return getAllDocumentsByClass(klass, keys, this.cancelToken);
            })
            .then(
                action(({data}) => {
                    this.state = 'done';
                    this.rootStore.adminStore.setDocuments(klass, pageKey, data);
                })
            )
            .catch(
                action((error) => {
                    console.warn('err', error);
                    this.state = 'error';
                    this.rootStore.msalStore.setApiOfflineState(true);
                })
            );
    }
}
