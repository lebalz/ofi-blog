import { firstNameFromEmail, lastNameFromEmail } from './../helpers/name';
import { action, computed, makeObservable, observable } from 'mobx';
import { User as UserProps } from '../api/user';

export default class User {
  readonly id: number;
  readonly email: string;
  readonly klasse?: string;
  readonly admin?: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly groups: string[];
  @observable
  isOutdated: boolean = false;

  constructor(props: UserProps) {
    this.id = props.id;
    this.email = props.email;
    this.admin = props.admin;
    this.klasse = props.class;
    this.groups = props.groups || [];
    this.createdAt = new Date(props.created_at);
    this.updatedAt = new Date(props.updated_at);
    makeObservable(this);
  }

  static formatDate(date: Date) {
    return date.toLocaleString();
  }

  @computed
  get firstName(): string {
    return firstNameFromEmail(this.email)
  }

  @computed
  get lastName(): string {
    return lastNameFromEmail(this.email)
  }

  @computed
  get name(): string {
    return `${this.firstName} ${this.lastName[0]}.`
  }

  @computed
  get props(): UserProps {
    return {
      id: this.id,
      email: this.email,
      class: this.klasse,
      groups: this.groups,
      admin: this.admin,
      created_at: this.createdAt.toISOString(),
      updated_at: this.updatedAt.toISOString()
    };
  }

  clone(): User {
    return new User(this.props);
  }
}
