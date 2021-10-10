import { action, computed, makeObservable, observable } from 'mobx';
import { Document as DocumentProps } from '../api/document';

export default class Document {
  @observable id: number;
  @observable userId: number;
  @observable webKey: string;
  @observable pristine: Object;
  @observable createdAt: Date;
  @observable
  updatedAt: Date;

  @observable.ref
  data: Object;

  @observable
  state: 'ready' | 'pending' | 'error' = 'ready';

  constructor(props: DocumentProps) {
    this.update(props);
    makeObservable(this);
  }

  static formatDate(date: Date) {
    return date.toLocaleString();
  }

  @action
  setData(data: Object) {
    this.data = data;
  }

  @action
  update(props: DocumentProps) {
    this.id = props.id;
    this.userId = props.user_id;
    this.webKey = props.web_key;
    this.pristine = props.data;
    this.data = props.data;
    this.createdAt = new Date(props.created_at);
    this.updatedAt = new Date(props.updated_at);
  }

  @computed
  get props(): DocumentProps {
    return {
      id: this.id,
      user_id: this.userId,
      web_key: this.webKey,
      data: this.data,
      created_at: this.createdAt.toISOString(),
      updated_at: this.updatedAt.toISOString()
    };
  }
}
