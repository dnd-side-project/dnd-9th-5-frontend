'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { patchDeleteAccount } from '@/apis';
import useUserState from '@/context/userState';

export default function Page() {
  const router = useRouter();
  const { token, clearUser } = useUserState();
  const withdrawalReason = useSearchParams().get('reason');

  useEffect(() => {
    if (token && withdrawalReason) {
      patchDeleteAccount(token.accessToken, token.refreshToken, withdrawalReason).then(
        (response) => {
          console.log(response);
          clearUser();
        }
      );
    }
    router.back();
  });

  return <>회원탈퇴</>;
}
