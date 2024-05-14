'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { getRegister } from '@/apis';
import useUserState from '@/context/userState';

export default function Page() {
  const code = useSearchParams().get('code');
  const { setUser } = useUserState();
  const router = useRouter();

  useEffect(() => {
    if (code) {
      getRegister(code).then((response) => {
        setUser(response);
        localStorage.setItem('accesstoken', response.token.accessToken);
        alert(`로그인에 성공했어요!`);
        router.back();
      });
    }
  });

  return;
}
