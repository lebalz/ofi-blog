import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';
import { Document } from './document';
import { TimedTopic } from './timed_topic';

export interface UserProps {
  class?: string;
  groups: string[];
}

export interface User extends UserProps {
  id: number;
  email: string;
  admin: boolean;
  created_at: string;
  updated_at: string;
}

export function user(): AxiosPromise<User> {
  return api.get('user');
}

export function data(): AxiosPromise<{user: User, documents: Document<any>[], timed_topics: TimedTopic[]}> {
  return api.get('user/data');
}
