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
      getRegister(code).then((response) => setUser(response));
      router.replace('/menu');
    }
  });

  return <>로그인</>;
}
