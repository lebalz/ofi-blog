import { CancelTokenSource } from 'axios';
import { action, makeObservable, observable } from "mobx";
import { computedFn } from "mobx-utils";
import { getDocument, postDocument, putDocument, Document as DocumentProps, deleteDocument } from "../api/document";
import Document from "../models/Document";
import { RootStore } from "./stores";

export class DocumentStore {
  private readonly root: RootStore;
  documents = observable<Document>([]);
  
  @observable initialized: boolean = false
  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this);
  }

  find = computedFn(
    function <T extends Object = Object>(this: DocumentStore, webKey: string) {
      return this.documents.find((q) => q.webKey === webKey) as Document<T>;
    },
    { keepAlive: true }
  );

  @action
  createOrUpdateDocument<T extends Object = Object>(webKey: string, data: T): Document<T> {
    const current = this.find<T>(webKey);
    if (current) {
      current.setData(data);
      return current;
    } 
    const doc = new Document(this, webKey, data);
    this.documents.push(doc);
    return doc;
  }

  @action
  getOrCreateDocument<T extends Object = Object>(webKey: string, defaultData: T): Document<T> {
    const current = this.find<T>(webKey);
    if (current) {
      return current;
    }
    const doc = new Document(this, webKey, defaultData);
    this.documents.push(doc);
    return doc;
  }


  @action
  apiGetDocument<T extends Object = Object>(webKey: string, cancelToken: CancelTokenSource): Promise<DocumentProps<T> | undefined> {
    return this.root.msalStore.withToken().then((ok) => {
      if (ok) {
        return getDocument<T>(webKey, cancelToken).then(({data}) => {
          return data;
        })
      }
    })
  }

  @action
  apiCreateDocument<T extends Object = Object>(webKey: string, data: T, cancelToken: CancelTokenSource): Promise<DocumentProps<T> | undefined> {
    return this.root.msalStore.withToken().then((ok) => {
      if (ok) {
        return postDocument<T>(webKey, data, cancelToken).then(({data}) => {
          return data;
        })
      }
    })
  }

  @action
  apiDeleteDocument(webKey: string, cancelToken: CancelTokenSource) {
    return this.root.msalStore.withToken().then((ok) => {
      if (ok) {
        return deleteDocument(webKey, cancelToken);
      }
    });
  }

  @action
  apiUpdateDocument<T extends Object = Object>(webKey: string, data: T, cancelToken: CancelTokenSource) {
    return this.root.msalStore.withToken().then((ok) => {
      if (ok) {
        return putDocument<T>(webKey, data, cancelToken)
      }
    });
  }
}
