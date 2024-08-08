export const setServerCookie = async (key: string, value: string, options?: { expires?: Date }) => {
  const { cookies } = await import('next/headers');
  cookies().set(key, value, {
    expires: options?.expires,
  });
};

export const getServerCookie = async (key: string) => {
  const { cookies } = await import('next/headers');
  const cookie = cookies().get(key);
  if (!cookie) throw `There is no ${key} in cookie!`;
  return cookie.value;
};

export const removeServerCookie = async (key: string) => {
  const { cookies } = await import('next/headers');
  cookies().set(key, '');
};
