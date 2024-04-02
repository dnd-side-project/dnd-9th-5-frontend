'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { getRegister } from '@/apis';
import useUserState from '@/context/userState';

export default function Page() {
  const code = useSearchParams().get('code');
  const router = useRouter();
  const { setUser } = useUserState();

  useEffect(() => {
    if (code) {
      console.log('로그인');
      getRegister(code).then((response) => {
        setUser(response);
        alert('로그인 성공');
        router.back();
      });
    }
  });

  return <>로그인</>;
}
