'use client';

import { useRouter } from 'next/navigation';

import { getRegister } from '@/apis';
import { COOKIE_ACCESS_TOKEN, COOKIE_EMAIL, COOKIE_NICKNAME } from '@/constants';
import { useDidMount } from '@/hooks';
import { setClientCookie } from '@/utils';

interface AuthComponentProps {
  code: string;
}

export default function AuthComponent({ code }: AuthComponentProps) {
  const router = useRouter();

  useDidMount(async () => {
    try {
      const {
        token: { accessToken },
        COOKIE_EMAIL,
        COOKIE_NICKNAME,
      } = await getRegister(code);

      setClientCookie(COOKIE_ACCESS_TOKEN, accessToken);
      setClientCookie(COOKIE_EMAIL, COOKIE_EMAIL);
      setClientCookie(COOKIE_NICKNAME, COOKIE_NICKNAME);

      alert(`로그인에 성공했어요!`);
      router.push('/');
    } catch (error) {
      router.push('/');
    }
  });

  return null;
}
