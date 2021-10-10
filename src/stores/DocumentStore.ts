import { action, makeObservable, observable } from "mobx";
import { computedFn } from "mobx-utils";
import { getDocument, postDocument, putDocument, Document as DocumentProps } from "../api/document";
import Document from "../models/Document";
import { RootStore } from "./stores";

export class DocumentStore {
  private readonly root: RootStore;
  documents = observable<Document>([]);
  
  @observable initialized: boolean = false
  constructor(root: RootStore) {
    makeObservable(this);
    this.root = root;
  }


  find = computedFn(
    function (this: DocumentStore, webKey: string): Document | undefined {
      return this.documents.find((q) => q.webKey === webKey);
    },
    { keepAlive: true }
  );


  @action
  loadDocument(webKey: string) {
    this.root.msalStore.callApi<DocumentProps, Document>(
      () => getDocument(webKey),
      ({data}) => {
        const doc = new Document(data);
        const old = this.find(doc.webKey);
        if (old) {
          this.documents.remove(old);
        }
        this.documents.push(doc);
        console.log([...this.documents]);
        return doc;
      }
    );
    // return this.root.msalStore.getToken().then((token) => {
    //   api.defaults.headers.Authorization = `Bearer ${token}`;
    //   return getDocument(webKey).then(({data}) => {
    //     console.log('dt', data)
    //     return true;
    //   })
    // })
  }

  @action
  createDocument(webKey: string, data: Object) {
    this.root.msalStore.callApi(
      () => postDocument(webKey, data),
      (res) => {
        console.log('success post', data)
      }
    );
  }

  @action
  updateDocument(webKey: string, data: Object) {
      const old = this.find(webKey);
      this.root.msalStore.callApi<Object, void>(
      () => putDocument(webKey, data),
      (res) => {
        if (old) {
          this.documents.remove(old);
        }
        old.setData(data);
        this.documents.push(old);
      }
    );
  }
}
