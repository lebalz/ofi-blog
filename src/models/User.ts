import { computed } from 'mobx';
import { User as UserProps } from '../api/user';

export default class User {
  readonly id: number;
  readonly email: string;
  readonly klasse?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: UserProps) {
    this.id = props.id;
    this.email = props.email;
    this.klasse = props.class;
    this.createdAt = new Date(props.created_at);
    this.updatedAt = new Date(props.updated_at);
  }

  static formatDate(date: Date) {
    return date.toLocaleString();
  }

  @computed
  get props(): UserProps {
    return {
      id: this.id,
      email: this.email,
      class: this.klasse,
      created_at: this.createdAt.toISOString(),
      updated_at: this.updatedAt.toISOString()
    };
  }
}
