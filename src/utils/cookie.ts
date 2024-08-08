import { isServer } from './isServer';

export const setCookie = async (key: string, value: string, options?: { expires?: Date }) => {
  // 서버 측 쿠키
  if (isServer) {
    const { cookies } = await import('next/headers');
    cookies().set(key, value, {
      expires: options?.expires,
    });
    return;
  }

  // 클라이언트 측 쿠키
  document.cookie = `${key}=${value}; path=/; ${
    options?.expires ? `expires=${options.expires.toUTCString()}` : ''
  }`;
};

export const getCookie = async (key: string) => {
  // 서버측 쿠키
  if (isServer) {
    const { cookies } = await import('next/headers');
    return cookies().get(key);
  }

  // 클라이언트 측 쿠키
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);

  return parts.pop()?.split(';').shift();
};

export const removeCookie = async (key: string) => {
  // 서버측 쿠키
  if (isServer) {
    const { cookies } = await import('next/headers');
    cookies().set(key, '');
    return;
  }

  // 클라이언트 측 쿠키
  document.cookie = `${key}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
};
