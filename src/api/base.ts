import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';
import { API } from '../authConfig';
import siteConfig from '@generated/docusaurus.config';
const { OFFLINE_MODE } = siteConfig.customFields as { OFFLINE_MODE?: boolean };

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

if (OFFLINE_MODE) {
  api.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      throw new axios.Cancel('Offline Mode - no backend server available.');
    },
    error => {
      Promise.reject(error);
    });
}

export function isLive(cancelToken: CancelTokenSource) {
  return api.get('', { cancelToken: cancelToken.token });
}

export default api;
