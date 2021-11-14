import { MSALStore } from "./MSALStore";
import { DocumentStore } from "./DocumentStore";

import React from "react";
import { makeObservable, observable } from "mobx";
import { UserStore } from "./UserStore";

export class RootStore {
  stores = observable([]);
  @observable initialized = false;

  documentStore: DocumentStore;
  msalStore: MSALStore;
  userStore: UserStore;
  constructor() {
    makeObservable(this);
    this.msalStore = new MSALStore(this);
    this.documentStore = new DocumentStore(this);
    this.userStore = new UserStore(this);
    this.initialized = true;
  }
}

export const rootStore = Object.freeze(new RootStore());
export const storesContext = React.createContext(rootStore);
export const StoresProvider = storesContext.Provider;
