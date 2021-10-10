import { action, computed, observable } from 'mobx';
import { Document as DocumentProps } from '../api/document';

export default class Document {
  readonly id: number;
  readonly userId: number;
  readonly webKey: string;
  readonly pristine: Object;

  readonly createdAt: Date;
  readonly updatedAt: Date;

  @observable.ref
  data: Object;

  constructor(props: DocumentProps) {
    this.id = props.id;
    this.userId = props.user_id;
    this.webKey = props.web_key;
    this.pristine = props.data;
    this.data = props.data;
    this.createdAt = new Date(props.created_at);
    this.updatedAt = new Date(props.updated_at);
  }

  static formatDate(date: Date) {
    return date.toLocaleString();
  }

  @action
  setData(data: Object) {
    this.data = data;
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
