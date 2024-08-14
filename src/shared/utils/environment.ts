import { NODE_ENV } from '../constants';

export const isProduction = NODE_ENV === 'production';
export const isServer = typeof window === 'undefined';
