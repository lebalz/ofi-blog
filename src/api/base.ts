import axios from 'axios';
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

export default api;
