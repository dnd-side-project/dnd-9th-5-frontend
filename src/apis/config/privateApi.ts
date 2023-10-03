import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { BASE_API_URL } from '@/constants';
import { getCookie } from '@/utils/cookieController';

import type { CustomInstance } from './type';

const privateApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  withCredentials: true,
});

privateApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const accessToken = getCookie('accessToken');
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

privateApi.interceptors.response.use((response) => response.data);

export default privateApi;
