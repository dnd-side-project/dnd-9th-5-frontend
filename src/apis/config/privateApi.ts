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

privateApi.interceptors.response.use((response) => response.data);
privateApi.interceptors.request.use(
  (config) => {
    const accessToken = getAccesstoken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    alert('오류가 발생했습니다. 다시 시도해주세요!');
    location.href = '/auth/logout';
    // if (error.response.status === 415) {
    //   if (confirm('세션이 만료되었습니다. 다시 로그인해주세요!')) {
    //     open('/menu');
    //   }
    // }
    return Promise.reject(error);
  }
);

export default privateApi;
