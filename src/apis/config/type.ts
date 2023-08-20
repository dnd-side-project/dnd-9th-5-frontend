import {
  AxiosInstance,
  type AxiosInterceptorManager,
  AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

export type CustomResponseFormat<T = any> = T;

export interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
  get<T>(...params: Parameters<AxiosInstance['get']>): Promise<T>;
  delete<T>(...params: Parameters<AxiosInstance['delete']>): Promise<T>;
  post<T>(...params: Parameters<AxiosInstance['post']>): Promise<T>;
  put<T>(...params: Parameters<AxiosInstance['put']>): Promise<T>;
  patch<T>(...params: Parameters<AxiosInstance['patch']>): Promise<T>;
}

export type ErrorStatus = 400 | 401 | 403 | 412 | 500;
