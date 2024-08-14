'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { patchDeleteAccount } from '@/apis';
import { COOKIE_ACCESS_TOKEN } from '@/constants';
import { useDidMount } from '@/hooks';
import { getClientCookie, removeClientCookie } from '@/utils';

export default function WithdrawComponent() {
  const router = useRouter();
  const token = getClientCookie(COOKIE_ACCESS_TOKEN);
  const withdrawalReason = useSearchParams().get('reason');

  useDidMount(async () => {
    if (token && withdrawalReason) {
      const response = await patchDeleteAccount(withdrawalReason);
      console.log(response);
    }

    // 회원탈퇴 api 될 떄 까지만
    // if (token) {
    //   patchLogout(token.accessToken, token.refreshToken).then(() => {
    //     alert('로그아웃 되었습니다');
    //   });
    // }
    removeClientCookie(COOKIE_ACCESS_TOKEN);
    router.replace('/menu');
  });

  return null;
}
