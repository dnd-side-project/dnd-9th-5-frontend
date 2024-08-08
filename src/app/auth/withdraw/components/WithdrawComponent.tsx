'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { patchDeleteAccount } from '@/apis';
import useUserState from '@/context/userState';

export default function WithdrawComponent() {
  const router = useRouter();
  const { token, clearUser } = useUserState();
  const withdrawalReason = useSearchParams().get('reason');

  useEffect(() => {
    if (token && withdrawalReason) {
      patchDeleteAccount(token.accessToken, token.refreshToken, withdrawalReason).then(
        (response) => {
          console.log(response);
        }
      );
    }
    // 회원탈퇴 api 될 떄 까지만
    // if (token) {
    //   patchLogout(token.accessToken, token.refreshToken).then(() => {
    //     alert('로그아웃 되었습니다');
    //   });
    // }
    clearUser();
    localStorage.removeItem('accesstoken');
    router.replace('/menu');
  });

  return null;
}
