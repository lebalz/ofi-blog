import { AxiosPromise, AxiosResponse } from 'axios';
import {
  AccountInfo,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser";
import { action, computed, makeObservable, observable, reaction } from "mobx";
import { API, loginRequest } from "../authConfig";
import { RootStore } from "./stores";
import api from '../api/base';

export class ApiCall<T, V> {
  @observable
  state: 'waiting' | 'processing' | 'done' = 'waiting';
  fetch: () => AxiosPromise<T>;
  onDone: (data: AxiosResponse<T>) => V;

  constructor(fetch: () => AxiosPromise<T>, onDone: (data: AxiosResponse<T>) => V) {
    this.fetch = fetch;
    this.onDone = onDone;
  }
}

export class MSALStore {
  private readonly root: RootStore;
  @observable
  account?: AccountInfo;

  @observable.ref
  _msalInstance?: PublicClientApplication;

  apiCalls = observable.array<ApiCall<unknown, unknown>>([], {deep: false});

  constructor(root: RootStore) {
    makeObservable(this);
    this.root = root;
    reaction(
      () => this.loggedIn,
      (isLoggedIn) => {
        if (isLoggedIn && this.apiCalls.length > 0) {
          console.log('run v2')
          this.handleCall();
        } else {
          this.apiCalls.splice(0);
        }
      }
    )
    reaction(
      () => this.apiCalls.length > 0,
      (run) => {
        if (run && this.loggedIn) {
          console.log('run v2')
          this.handleCall();
        }
      }
    )
  }

  @action
  handleCall() {
    const task = this.apiCalls.find(c => c.state === 'waiting');
    if (task) {
      task.state = 'processing';
      task.fetch().then((value) => {
        console.log(value);
        return task.onDone(value)
      }).catch((error) => console.warn(error));
      this.apiCalls.remove(task);
    }
  }

  @action
  callApi<T, V>(fetch: () => AxiosPromise<T>, onDone: (data: AxiosResponse<T>) => V) {
    const call = () => this.getToken().then((token) => {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return fetch();
    });
    this.apiCalls.push(new ApiCall(call, onDone));
  }

  @computed
  get msalInstance(): PublicClientApplication {
    if (!this._msalInstance) {
      throw 'No MSAL Instance set!'
    }
    return this._msalInstance;
  }

  @action
  setMsalInstance(msalInstance: PublicClientApplication) {
    this._msalInstance = msalInstance;
  }

  @action
  setAccount(account?: AccountInfo) {
    this.account = account;
  }

  @computed
  get loggedIn(): boolean {
    return !!this.account;
  }

  @action
  login() {
    this.msalInstance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  }

  @action
  logout() {
    if (!this.loggedIn) {
      return;
    }
    const logoutRequest = {
      account: this.msalInstance.getAccountByUsername(this.account.username),
    };
    this.msalInstance.logoutRedirect(logoutRequest).catch((e) => {
      console.log(e);
    });
  }

  @action
  getTokenRedirect() {
    if (!this.account) {
      console.warn("Not logged in");
      throw "No Login Present!";
    }
    const request = {
      scopes: [`${API}/api/access_as_user`],
      account: this.msalInstance.getAccountByUsername(this.account.username),
    };
    console.log(request, this.account);

    return this.msalInstance.acquireTokenSilent(request).catch((error) => {
      console.error(error);
      console.warn(
        "silent token acquisition fails. acquiring token using popup"
      );
      if (error instanceof InteractionRequiredAuthError) {
        // fallback to interaction when silent call fails
        console.log("request", request);
        return this.msalInstance.acquireTokenRedirect(request);
      }
      throw error;
    });
  }

  getToken() {
    return this.getTokenRedirect().then(
      (res) => {
        if (res) {
          return res.accessToken;
        }
        return '';
      } 
    )
  }
}
