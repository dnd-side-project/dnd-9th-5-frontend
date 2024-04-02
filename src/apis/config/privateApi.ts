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
    return Promise.reject(error);
  }
);

export default privateApi;
