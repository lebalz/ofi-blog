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

export class MSALStore {
  private readonly root: RootStore;
  @observable
  account?: AccountInfo;

  @observable.ref
  _msalInstance?: PublicClientApplication;

  constructor(root: RootStore) {
    makeObservable(this);
    this.root = root;
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
      console.warn(e);
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
      console.warn(e);
    });
  }

  @action
  getTokenRedirect() {
    if (!this.account) {
      throw "No Login Present!";
    }
    const request = {
      scopes: [`${API}/api/access_as_user`],
      account: this.msalInstance.getAccountByUsername(this.account.username),
    };
    return this.msalInstance.acquireTokenSilent(request).catch((error) => {
      console.error(error);
      console.warn(
        "silent token acquisition fails. acquiring token using popup"
      );
      if (error instanceof InteractionRequiredAuthError) {
        // fallback to interaction when silent call fails
        return this.msalInstance.acquireTokenRedirect(request);
      }
      throw error;
    });
  }

  withToken(): Promise<boolean> {
    return this.getTokenRedirect().then(
      (res) => {
        if (res) {
          api.defaults.headers.Authorization = `Bearer ${res.accessToken}`;
          return true;
        }
        console.warn('No Login Token Found')
        return false;
      } 
    )
  }
}
