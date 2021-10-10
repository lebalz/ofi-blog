import api from "./base";
import { AxiosPromise, CancelTokenSource } from "axios";

export interface Document {
  id: number;
  user_id: number;
  web_key: string;
  data: Object;
  created_at: string;
  updated_at: string;
}

export function getDocument(webKey: string): AxiosPromise<Document> {
  return api.get(`document/${webKey}`);
}

export function postDocument(webKey: string, data: Object): AxiosPromise<Document> {
  return api.post('document', {
    web_key: webKey,
    data: data,
  });
}

export function putDocument(webKey: string, data: Object) {
  return api.put(`document/${webKey}`, {
    data: data,
  });
}

export function deleteDocument(webKey: string) {
  return api.delete(`document/${webKey}`);
}