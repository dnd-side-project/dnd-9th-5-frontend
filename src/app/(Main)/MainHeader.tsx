'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/Header';
import FilterTab from '@/components/Header/FilterTab';
import MyposeTab from '@/components/Header/MyposeTab';
import Tab from '@/components/Header/Tab';
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
