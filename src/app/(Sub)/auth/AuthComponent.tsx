'use client';

import { useRouter } from 'next/navigation';

import { getRegister } from '@/apis';
import { ACCESS_TOKEN, EMAIL, NICKNAME } from '@/constants';
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
        email,
        nickname,
      } = await getRegister(code);

      setClientCookie(ACCESS_TOKEN, accessToken);
      setClientCookie(EMAIL, email);
      setClientCookie(NICKNAME, nickname);

      alert(`로그인에 성공했어요!`);
      router.push('/');
    } catch (error) {
      router.push('/');
    }
  });

  return null;
}
