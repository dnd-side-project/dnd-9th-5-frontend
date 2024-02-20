'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { getRegister } from '@/apis';

export default function Page() {
  const code = useSearchParams().get('code');

  useEffect(() => {
    if (code) {
      console.log(code);
      getRegister(code);
    }
  });

  return <>Loading...</>;
}
