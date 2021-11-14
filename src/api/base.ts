import axios, { CancelTokenSource } from 'axios';
import { API } from '../authConfig';

export namespace Api {
  export const BASE_API_URL = ofiApiUrl();

  function ofiApiUrl() {
    return `${API}/api/`;
  }
}

const api = axios.create({
  baseURL: Api.BASE_API_URL,
  headers: {}
});

export function isLive(cancelToken: CancelTokenSource) {
  return api.get('', { cancelToken: cancelToken.token });
}

export default api;
