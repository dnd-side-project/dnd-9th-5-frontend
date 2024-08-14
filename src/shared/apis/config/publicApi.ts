import axios from 'axios';

import { CustomInstance } from './type';
import { BASE_API_URL } from '@/constants';

const publicApi: CustomInstance = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  withCredentials: true,
});

publicApi.interceptors.response.use((response) => response.data);

export default publicApi;
