'use client';

import { usePathname } from 'next/navigation';

import Tab from './Tab';
import FilterTab from '@/app/(Main)/feed/FilterTab';
import MyposeTab from '@/app/(Main)/mypose/MyposeTab';
import Header from '@/components/Header';
import { Spacing } from '@/components/Spacing';

export default function MainHeader() {
  const curPath = usePathname();
  const isFeedPage = curPath.includes('/feed');
  const isMyposePage = curPath.includes('/mypose');

  return (
    <>
      <Spacing size={48} />
      {isFeedPage && <Spacing size={56} />}
      {isMyposePage && <Spacing size={72} />}
      <Header title="PosePicker" menu={true}>
        <Tab />
        {isFeedPage && <FilterTab />}
        {isMyposePage && <MyposeTab />}
      </Header>
    </>
  );
}
