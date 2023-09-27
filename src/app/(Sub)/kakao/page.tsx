'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useRegisterMutation } from '@/apis/mutations';

export default function Page() {
  const searchParams = useSearchParams();
  const { mutate } = useRegisterMutation();
  useEffect(() => {
    mutate({ access_token: searchParams.get('code') || '' });
  }, [mutate, searchParams]);

  return <div>로그인 중입니다 ..</div>;
}
