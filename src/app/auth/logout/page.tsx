'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { patchLogout } from '@/apis';
import useUserState from '@/context/userState';

export default function Page() {
  const { token, clearUser } = useUserState();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      patchLogout(token.accessToken, token.refreshToken).then(() => {
        alert('로그아웃 성공!');
      });
    }
    clearUser();
    localStorage.removeItem('accesstoken');
    router.back();
  });

  return <>로그아웃</>;
}
