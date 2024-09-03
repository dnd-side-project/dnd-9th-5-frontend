import axios from 'axios';

import { CustomInstance } from './type';
import {
  BASE_API_URL,
  COOKIE_ACCESS_TOKEN,
  ERROR_UNAUTHORIZED,
  ERROR_UNSUPPORTED_MEDIA_TYPE,
} from '@/constants';
import { getClientCookie, removeClientCookie } from '@/utils';

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  withCredentials: true,
});

privateApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status;
    console.log('🚀 ~ status:', status);
    if (status === ERROR_UNAUTHORIZED || status === ERROR_UNSUPPORTED_MEDIA_TYPE) {
      alert('세션이 만료되었어요. 다시 로그인이 필요해요!');
      removeClientCookie(COOKIE_ACCESS_TOKEN);
    }
    // location.href = '/';
    return Promise.reject(error);
  }
);

privateApi.interceptors.request.use(
  (config) => {
    const accessToken = getClientCookie(COOKIE_ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log('request : ' + error.response);
  }
);

export default privateApi;
