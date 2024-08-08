'use client';

import { useRouter } from 'next/navigation';

import { patchLogout } from '@/apis';
import useUserState from '@/context/userState';
import useDidMount from '@/hooks/useDidMount';

export default function LogoutComponent() {
  const { token, clearUser } = useUserState();
  const router = useRouter();

  useDidMount(async () => {
    if (token) {
      await patchLogout(token.accessToken, token.refreshToken);
      alert('로그아웃 되었습니다');
    }
    clearUser();
    localStorage.removeItem('accesstoken');
    router.back();
  });

  return null;
}
