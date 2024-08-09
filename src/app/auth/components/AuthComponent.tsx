'use client';

import { useRouter } from 'next/navigation';

import { getRegister } from '@/apis';
import useUserState from '@/context/userState';
import useDidMount from '@/hooks/useDidMount';

interface AuthComponentProps {
  code: string;
}

export default function AuthComponent({ code }: AuthComponentProps) {
  const { setUser } = useUserState();
  const router = useRouter();

  useDidMount(async () => {
    try {
      const response = await getRegister(code);
      setUser(response);
      localStorage.setItem('accesstoken', response.token.accessToken);
      alert(`로그인에 성공했어요!`);
      router.push('/');
    } catch (error) {
      router.push('/');
    }
  });

  return null;
}
