import axios from 'axios';

import { BASE_SITE_URL } from '@/constants';

const instance = axios.create({
  baseURL: `${BASE_SITE_URL}/api`,
  withCredentials: true,
});

export default instance;
