import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';

export interface User {
  id: number;
  email: string;
  admin: boolean;
  class?: string;
  groups: string[];
  created_at: string;
  updated_at: string;
}

export function user(): AxiosPromise<User> {
  return api.get('user');
}
