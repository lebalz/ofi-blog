import { PolicyStore } from './PolicyStore';
import { MSALStore } from "./MSALStore";
import { DocumentStore } from "./DocumentStore";

import React from "react";
import { makeObservable, observable } from "mobx";
import { UserStore } from "./UserStore";
import { TimedTopicStore } from "./TimedTopicStore";
import { CommentStore } from './CommentStore';
import { AdminStore } from './AdminStore';

export class RootStore {
  stores = observable([]);
  @observable initialized = false;

  documentStore: DocumentStore;
  commentStore: CommentStore;
  msalStore: MSALStore;
  userStore: UserStore;
  timedTopicStore: TimedTopicStore;
  policyStore: PolicyStore;
  adminStore: AdminStore;
  constructor() {
    makeObservable(this);
    this.msalStore = new MSALStore(this);
    this.documentStore = new DocumentStore(this);
    this.commentStore = new CommentStore(this);
    this.userStore = new UserStore(this);
    this.timedTopicStore = new TimedTopicStore(this);
    this.policyStore = new PolicyStore(this);
    this.adminStore = new AdminStore(this);
    this.initialized = true;
  }
}

export const rootStore = Object.freeze(new RootStore());
export const storesContext = React.createContext(rootStore);
export const StoresProvider = storesContext.Provider;
