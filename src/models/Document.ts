import axios, { CancelTokenSource, Method } from "axios";
import { debounce } from "lodash";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { Document as DocumentProps } from "../api/document";
import { DocumentStore } from "../stores/DocumentStore";

type RequestState = "init" | "done" | "pending" | "deleted" | "error";
class ApiState {
  @observable
  method: Method;

  @observable
  state: RequestState;

  cancelToken: CancelTokenSource = axios.CancelToken.source();

  constructor(method: Method, state: RequestState = "init") {
    this.method = method;
    this.state = state;
  }

  @action
  cancelApiRequests() {
    this.cancelToken.cancel("Requests canceled");
    this.cancelToken = axios.CancelToken.source();
  }
}

export default class Document<T extends Object = Object> {
  private readonly store: DocumentStore;

  @observable id: number = -1;
  @observable userId: number = -1;
  @observable webKey: string;
  @observable.ref
  pristine: T = {} as T;
  @observable createdAt: Date = new Date();
  @observable
  updatedAt: Date = new Date();

  @observable.ref
  data: T = {} as T;

  @observable.ref
  state: ApiState;

  constructor(
    store: DocumentStore,
    webKey: string,
    data?: T,
    update: boolean = false
  ) {
    this.store = store;
    this.webKey = webKey;
    if (data) {
      this.data = data;
    }
    this.state = new ApiState("get");
    this.store.apiGetDocument<T>(this.webKey, this.state.cancelToken).then(
      action((docProps) => {
        if (docProps) {
          this.updateProps(docProps);
          this.state.state = "done";
          if (data && update) {
            this.setData(data);
          }
        } else if (data) {
          this.state.method = "post";
          this.store
            .apiCreateDocument(this.webKey, data, this.state.cancelToken)
            .then(
              action((newDoc) => {
                this.updateProps(newDoc);
                this.state.state = "done";
              })
            );
        } else {
          this.state.state = "error";
        }
      })
    );
    makeObservable(this);
  }

  static formatDate(date: Date) {
    return date.toLocaleString();
  }

  @computed
  get isCreated() {
    return this.id !== -1;
  }

  @action
  private _save() {
    if (this.isCreated) {
      this.state.cancelApiRequests();
      this.store.apiUpdateDocument(
        this.webKey,
        this.data,
        this.state.cancelToken
      );
    }
  }

  save = debounce(this._save, 1000, { leading: false, trailing: true });

  @action
  setData(data: T) {
    this.data = data;
    this.updatedAt = new Date();
    this.save();
  }

  @action
  delete() {
    this.state.state = "deleted";
    this.store
      .apiDeleteDocument(this.webKey, this.state.cancelToken)
      .then(() => {
        runInAction(() => this.store.documents.remove(this));
      });
  }

  @action
  private updateProps(props: DocumentProps<T>) {
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
      data: this.data,
      created_at: this.createdAt.toISOString(),
      updated_at: this.updatedAt.toISOString(),
    };
  }
}
