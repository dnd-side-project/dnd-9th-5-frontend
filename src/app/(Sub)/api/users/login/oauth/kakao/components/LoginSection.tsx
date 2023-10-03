'use client';

import { useRouter } from 'next/navigation';

import { useRegisterQuery } from '@/apis';
import { setCookie } from '@/utils/cookieController';

interface LoginSectionProps {
  code: string;
}
export default function LoginSection({ code }: LoginSectionProps) {
  const router = useRouter();
  const { data } = useRegisterQuery(code);
  console.log(data);
  const { token, email, nickname } = data;
  const { accessToken, refreshToken, expiresIn } = token;
  setCookie('accessToken', accessToken);
  setCookie('refreshToken', refreshToken);
  router.replace('/menu');

  return <div></div>;
}
