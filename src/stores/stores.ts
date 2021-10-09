import { MSALStore } from "./MSALStore";

import React from "react";
import { makeObservable, observable } from "mobx";
import { DocumentStore } from "./DocumentStore";



export class RootStore {
  stores = observable([]);
  @observable initialized = false;

  documentStore: DocumentStore;
  msalStore: MSALStore;
  constructor() {
    makeObservable(this);
    this.documentStore = new DocumentStore(this);
    this.msalStore = new MSALStore(this);
    this.initialized = true;
  }
}

// export const stores = Object.freeze({
//   counterStore: new CounterStore(),
//   msalStore: new MSALStore(),
// });

export const rootStore = Object.freeze(new RootStore());
if (window) {
  (<any>window).store = rootStore;
}
export const storesContext = React.createContext(rootStore);
export const StoresProvider = storesContext.Provider;
