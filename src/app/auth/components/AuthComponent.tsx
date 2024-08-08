'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { getRegister } from '@/apis';
import useUserState from '@/context/userState';

interface AuthComponentProps {
  code: string;
}

export default function AuthComponent({ code }: AuthComponentProps) {
  const { setUser } = useUserState();
  const router = useRouter();

  useEffect(() => {
    getRegister(code).then((response) => {
      setUser(response);
      localStorage.setItem('accesstoken', response.token.accessToken);
      alert(`로그인에 성공했어요!`);
      router.back();
    });
  });
  return <div></div>;
}
