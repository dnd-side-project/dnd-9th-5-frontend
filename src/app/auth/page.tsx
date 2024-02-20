'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { getRegister } from '@/apis';

export default function Page() {
  const code = useSearchParams().get('code');
  const router = useRouter();

  useEffect(() => {
    if (code) {
      console.log(code);
      getRegister(code).then((res) => {
        console.log(res);
        router.replace('/menu');
      });
    }
  });

  return <>Loading...</>;
}
