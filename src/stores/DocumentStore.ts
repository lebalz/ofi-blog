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
  private createOrUpdateDocument(doc: DocumentProps): Document {
    const current = this.find(doc.web_key);
    if (current) {
      current.updatedAt = new Date(doc.created_at)
      current.setData(doc.data);
      return current;
    } 
      const d = new Document(doc);
      this.documents.push(d);
      return d;
    
  }


  @action
  loadDocument(webKey: string) {
    this.root.msalStore.callApi<DocumentProps, void>(
      () => getDocument(webKey),
      ({data}) => {
        this.createOrUpdateDocument(data);
      }
    );
  }

  @action
  createDocument(webKey: string, data: Object) {
    const current = this.find(webKey);
    if (current) {
      return this.updateDocument(webKey, data);
    }
    const props: DocumentProps = {
      data: data,
      id: -1,
      created_at: (new Date()).toISOString(),
      updated_at: (new Date()).toISOString(),
      user_id: -1,
      web_key: webKey
    }
    const doc = this.createOrUpdateDocument(props);
    doc.state = 'pending';
    this.root.msalStore.callApi(
      () => postDocument(webKey, data),
      (res) => {
        doc.update(res.data);
      }
    );
  }

  @action
  deleteDocument(webKey: string) {
      const toDel = this.find(webKey);
      this.root.msalStore.callApi(
      () => deleteDocument(webKey),
      (res) => {
        if (toDel) {
          this.documents.remove(toDel);
        }
        console.log('successful delete');
      }
    );
  }

  @action
  updateDocument(webKey: string, data: Object) {
      const current = this.find(webKey);
      if (current) {
        current.data = data;
        current.state = 'pending';
        current.updatedAt = new Date();
      }
      this.root.msalStore.callApi<Object, void>(
      () => putDocument(webKey, data),
      (res) => {
        current.state = 'ready';
      }
    );
  }
}
