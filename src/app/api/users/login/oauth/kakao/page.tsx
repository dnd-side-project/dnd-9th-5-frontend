'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { getRegister } from '@/apis';
import { userAtom } from '@/context/userState';

export default function Page() {
  const code = useSearchParams().get('code');
  const router = useRouter();
  const setUserState = useSetRecoilState(userAtom);

  useEffect(() => {
    if (code) {
      console.log(code);
      getRegister(code).then((res) => {
        console.log(res);
        // setUserState(res);
        // router.replace('/menu');
      });
    }
  });

  return <>Loading...</>;
}
