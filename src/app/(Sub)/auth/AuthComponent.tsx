'use client';

import { useRouter } from 'next/navigation';

import { getRegister } from '@/shared';
import { COOKIE_ACCESS_TOKEN, COOKIE_EMAIL, COOKIE_NICKNAME } from '@/shared';
import { useDidMount } from '@/shared';
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
        email,
        nickname,
      } = await getRegister(code);

      setClientCookie(COOKIE_ACCESS_TOKEN, accessToken);
      setClientCookie(COOKIE_EMAIL, email);
      setClientCookie(COOKIE_NICKNAME, nickname);

      alert(`로그인에 성공했어요!`);
      router.push('/');
    } catch (error) {
      router.push('/');
    }
  });

  return null;
}
