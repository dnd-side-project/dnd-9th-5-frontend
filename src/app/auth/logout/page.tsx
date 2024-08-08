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
      patchLogout().then(() => {
        alert('로그아웃 되었습니다');
      });
    }
    clearUser();
    localStorage.removeItem('accesstoken');
    router.back();
  });

  return;
}
