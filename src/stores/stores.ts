import { PolicyStore } from './PolicyStore';
import { MSALStore } from "./MSALStore";
import { DocumentStore } from "./DocumentStore";

import React from "react";
import { action, makeObservable, observable, runInAction } from "mobx";
import { UserStore } from "./UserStore";
import { TimedTopicStore } from "./TimedTopicStore";
import { CommentStore } from './CommentStore';
import { AdminStore } from './AdminStore';
import { ViewStore } from './ViewStore';
import { Document } from '../api/document';
import { Comment } from '../api/comment';
import { TimedExerciseData } from '../api/timed_exercise';
import { User } from '../api/user';
import { TimedTopic } from '../api/timed_topic';
export class RootStore {
  stores = observable([]);
  @observable
  initialized = false;
  @observable.ref
  timer?: NodeJS.Timer;

  @observable
  time_ms = 0;

  @observable
  loadedFileName?: string;

  documentStore: DocumentStore;
  commentStore: CommentStore;
  msalStore: MSALStore;
  userStore: UserStore;
  timedTopicStore: TimedTopicStore;
  policyStore: PolicyStore;
  adminStore: AdminStore;
  viewStore: ViewStore;
  constructor() {
    makeObservable(this);
    this.msalStore = new MSALStore(this);
    this.documentStore = new DocumentStore(this);
    this.commentStore = new CommentStore(this);
    this.userStore = new UserStore(this);
    this.timedTopicStore = new TimedTopicStore(this);
    this.policyStore = new PolicyStore(this);
    this.adminStore = new AdminStore(this);
    this.viewStore = new ViewStore(this);
    runInAction(() => {
      this.initialized = true;
    })    
  }
  @action
  startTimer() {
    this.timer = setInterval(
      action(() => {
        this.time_ms = Date.now();
      }),
      1000
    );
  }
  @action
  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.time_ms = 0;
    this.timer = undefined;
  }

  @action
  loadOfflineData(fname: string, data: { documents: Document<any>[], comments: Comment[], timed_topics: TimedTopic[], user: User }) {
    try {
      this.msalStore.loadOfflineData(data.user);
      this.userStore.loadOfflineData(data.user);
      this.documentStore.loadOfflineData(data.documents);
      this.commentStore.loadOfflineData(data.comments);
      this.timedTopicStore.loadOfflineData(data.timed_topics);
      this.stopTimer();
      this.loadedFileName = fname;
    } catch (e) {
      console.warn(e);
    }
  }
}

export const rootStore = Object.freeze(new RootStore());
export const storesContext = React.createContext(rootStore);
export const StoresProvider = storesContext.Provider;
