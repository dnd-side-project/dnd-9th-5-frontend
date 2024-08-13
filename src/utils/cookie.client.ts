export const setClientCookie = (key: string, value: string, options?: { expires?: Date }) => {
  document.cookie = `${key}=${value}; path=/; ${
    options?.expires ? `expires=${options.expires.toUTCString()}` : ''
  }`;
};

export const getClientCookie = (key: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);

  return parts.pop()?.split(';').shift();
};

export const removeClientCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
};
