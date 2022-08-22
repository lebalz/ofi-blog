import axios, { CancelTokenSource, Method } from 'axios';
import { debounce, DebouncedFunc } from 'lodash';
import { action, computed, IReactionDisposer, makeObservable, observable, reaction } from 'mobx';
import { getAllDocumentsByClass } from '../api/admin';
// import { baseUrl } from '../../docusaurus.config'
// import versions from '../../versions.json';
import { RootStore } from '../stores/stores';
type RequestState = 'init' | 'save' | 'done' | 'pending' | 'deleted' | 'error';


export default class BatchLoadService {
    private readonly tDebounce: number;
    private readonly rootStore: RootStore;
    private load: DebouncedFunc<() => Promise<any>>;
    cancelToken: CancelTokenSource = axios.CancelToken.source();
    disposer: IReactionDisposer;
    state: RequestState = 'init';

    loadKeys = observable.set<string>([]);

    constructor(tDebounce: number = 1000, rootStore: RootStore) {
        this.tDebounce = tDebounce;
        this.rootStore = rootStore;
        this.load = debounce(action(this._load), this.tDebounce, { leading: false, trailing: true, maxWait: 5000 });

        makeObservable(this);
        this.disposer = reaction(
            () => this.loadKeys.size,
            (len) => {
                if (len > 0) {
                    this.load();
                }
            }
        );
    }

    @action
    push(key: string) {
        console.log(key);
        this.loadKeys.add(key);
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
    saveNow() {
        this.load();
        return this.load.flush();
    }

    @action
    _load() {
        console.log(...this.loadKeys.values())
        if (this.loadKeys.size < 1) {
            return;
        }
        if (!this.rootStore.msalStore.loggedIn || !this.rootStore.userStore.current?.admin) {
            return;
        }
        const baseUrl = '/';
        const klass = window.location.pathname.replace(baseUrl, '').split('/')[0];
        // console.log(versions);
        // if (klass in versions) {
        //     console.log(klass, 'in versions')
        // }

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
                    this.rootStore.documentStore.addOrReplaceDocuments(data);
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
