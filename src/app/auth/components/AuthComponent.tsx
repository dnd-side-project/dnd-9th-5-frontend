'use client';

import { useRouter } from 'next/navigation';

import { getRegister } from '@/apis';
import { ACCESS_TOKEN } from '@/constants';
import useDidMount from '@/hooks/useDidMount';
import { setClientCookie } from '@/utils';

interface AuthComponentProps {
  code: string;
}

export default function AuthComponent({ code }: AuthComponentProps) {
  const router = useRouter();

  useDidMount(async () => {
    try {
      const response = await getRegister(code);
      setClientCookie(ACCESS_TOKEN, response.token.accessToken);
      setClientCookie('email', response.email);
      setClientCookie('nickname', response.nickname);
      alert(`로그인에 성공했어요!`);
      router.push('/');
    } catch (error) {
      router.push('/');
    }
  });

  return null;
}
