import axios from 'axios';

import { CustomInstance } from './type';
import { BASE_API_URL } from '@/constants/env';

function getAccesstoken() {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('accesstoken');
    return item;
  }
}

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  withCredentials: true,
});

privateApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 415) {
      alert('세션이 만료되었어요. 다시 로그인이 필요해요!');
    } else {
      alert('오류가 발생했어요. 다시 로그인해주세요!');
    }
    location.href = '/auth/logout';
    return Promise.reject(error);
  }
);

privateApi.interceptors.request.use(
  (config) => {
    const accessToken = getAccesstoken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    if (error.response.status === 415) {
      alert('세션이 만료되었어요. 다시 로그인이 필요해요!');
    } else {
      alert('오류가 발생했어요.');
    }
    location.href = '/auth/logout';
  }
);

export default privateApi;
