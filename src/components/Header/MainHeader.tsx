'use client';

import { usePathname } from 'next/navigation';

import Header from '.';
import FilterTab from './FilterTab';
import MyposeTab from './MyposeTab';
import Tab from './Tab';
import { Spacing } from '../Spacing';

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
