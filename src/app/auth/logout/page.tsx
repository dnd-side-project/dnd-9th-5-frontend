'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { patchLogout } from '@/apis';
import useUserState from '@/context/userState';

export default function Page() {
  const router = useRouter();
  const { token, clearUser } = useUserState();

  useEffect(() => {
    if (token) {
      patchLogout(token.accessToken, token.refreshToken).then((response) => {
        console.log(response);
      });
    }
    clearUser();
    router.replace('/menu');
  });

  return <>로그아웃 중...</>;
}
