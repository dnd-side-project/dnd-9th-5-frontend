import axios, { AxiosResponse } from 'axios';

import { BASE_API_URL } from '@/constants';

const publicApi = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  withCredentials: true,
});

publicApi.interceptors.response.use((response: AxiosResponse) => response.data);

export default publicApi;
