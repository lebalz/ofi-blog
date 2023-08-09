import axios, { CancelTokenSource, Method } from 'axios';
import { debounce } from 'lodash';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { umamiReport } from '../helpers/umami';
import { RootStore, rootStore } from '../stores/stores';
type RequestState = 'init' | 'save' | 'done' | 'pending' | 'deleted' | 'error';

export interface ApiModel {
    umami?: {
        event: string;
        message: string;
    };
    canUpdate: boolean;
    data: Object;
    saveService: SaveService;
}

export default class SaveService {
    private readonly tDebounce: number = 1000;
    private readonly rootStore: RootStore;
    @observable
    method: Method;

    @observable
    state: RequestState = 'init';

    @observable
    private _isOffline: boolean = false;

    cancelToken: CancelTokenSource = axios.CancelToken.source();

    @observable.ref
    model: ApiModel;
    endpoint: (model: ApiModel, CancelTokenSource) => Promise<any>;
    readonly: boolean;
    constructor(model: ApiModel, endpoint: (model: ApiModel, CancelTokenSource) => Promise<any>, tDebounce: number = 1000, readonly: boolean = false) {
        this.tDebounce = tDebounce;
        this.rootStore = rootStore;
        this.readonly = readonly;
        this.endpoint = endpoint;
        this.model = model;
        makeObservable(this);
        reaction(
            () => this._isOffline,
            (isOffline) => {
                this.rootStore.msalStore.setApiOfflineState(isOffline);
            }
        );
        reaction(
            () => this.model.data,
            (props) => {
                if (this.readonly) {
                    return;
                }
                this.save();
            }
        );
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
        if (this.readonly) {
            return Promise.resolve();
        }
        this.save();
        return this.save.flush();
    }

    save = debounce(this._save, this.tDebounce, { leading: false, trailing: true, maxWait: 5000 });

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
                    umamiReport(this.model.umami.event, `${this.model.umami.message}`);
                }
                return this.endpoint(this.model, this.cancelToken);
            })
            .then(
                action((res) => {
                    this._isOffline = false;
                    this.state = 'done';
                    return res;
                })
            )
            .catch(
                action((error) => {
                    console.warn('err', error);
                    this.state = 'error';
                    this._isOffline = true;
                })
            );
    }
}
