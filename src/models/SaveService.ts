import axios, { CancelTokenSource, Method } from 'axios';
import { debounce, DebouncedFunc } from 'lodash';
import { action, computed, IReactionDisposer, makeObservable, observable, reaction } from 'mobx';
import { umamiReport } from '../helpers/umami';
import { RootStore, rootStore } from '../stores/stores';
type RequestState = 'init' | 'save' | 'done' | 'pending' | 'deleted' | 'error';

export interface ApiModel {
    umami?: {
        event: string;
        data: Object;
    };
    canUpdate: boolean;
    data: Object;
    saveService: SaveService;
}

export default class SaveService {
    private readonly tDebounce: number;
    private readonly rootStore: RootStore;
    private save: DebouncedFunc<() => Promise<any>>;
    @observable
    method: Method;

    @observable
    state: RequestState = 'init';

    cancelToken: CancelTokenSource = axios.CancelToken.source();

    @observable.ref
    model: ApiModel;

    disposer: IReactionDisposer;
    offlineDisposer: IReactionDisposer;
    endpoint: (model: ApiModel, CancelTokenSource) => Promise<any>;
    constructor(model: ApiModel, endpoint: (model: ApiModel, CancelTokenSource) => Promise<any>, tDebounce: number = 1000) {
        this.tDebounce = tDebounce;
        this.save = debounce(action(this._save), this.tDebounce, { leading: false, trailing: true, maxWait: 5000 });

        this.rootStore = rootStore;
        this.endpoint = endpoint;
        this.model = model;
        makeObservable(this);
        this.disposer = reaction(
            () => this.model.data,
            (props) => {
                this.save();
            }
        );
        this.offlineDisposer = reaction(
            () => this.isOffline,
            (isOff, prev) => {
                if (prev && !isOff && this.state === 'error') {
                    this.save();
                }
            }
        );
    }

    @action
    cleanup() {
        this.disposer();
        this.offlineDisposer();
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
        this.save();
        return this.save.flush();
    }

    @action
    _save() {
        if (!this.rootStore.msalStore.loggedIn) {
            return;
        }
        const { isMyView } = this.rootStore.userStore;
        if (!this.model.canUpdate || !isMyView) {
            return Promise.resolve({
                updated_at: new Date().toISOString(),
                state: 'ok',
            });
        }
        this.cancelApiRequests();
        this.state = 'save';

        return this.rootStore.msalStore
            .withToken()
            .then((ok) => {
                if (ok && this.model.umami) {
                    umamiReport(this.model.umami.event, this.model.umami.data);
                }
                return this.endpoint(this.model, this.cancelToken);
            })
            .then(
                action((res) => {
                    this.rootStore.msalStore.setApiOfflineState(false);
                    this.state = 'done';
                    return res;
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
