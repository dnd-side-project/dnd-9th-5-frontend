'use client';

import { useRecoilValue } from 'recoil';

import MenuListSection from './components/MenuListSection';
import LoginSection from '@/app/(Main)/mypose/components/LoginSection';
import { MenuHeader } from '@/components/Header';
import { userAtom } from '@/context/userState';

export default function MenuPage() {
  const userdata = useRecoilValue(userAtom);
  console.log('!!');
  console.log('🚀 ~ MenuPage ~ userdata:', userdata);

  return (
    <div className="px-20">
      <MenuHeader />
      <LoginSection />
      <MenuListSection />
    </div>
  );
}
