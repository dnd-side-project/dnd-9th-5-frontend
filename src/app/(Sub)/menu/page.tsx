'use client';

import MenuListSection from './MenuListSection';
import LoginSection from '@/app/(Main)/mypose/components/LoginSection';
import Header from '@/components/Header';

export default function MenuPage() {
  return (
    <div className="px-20">
      <Header close={true} title="메뉴" />
      <LoginSection />
      <MenuListSection />
    </div>
  );
}
