import api from './base';
import { AxiosPromise, CancelTokenSource } from 'axios';

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
