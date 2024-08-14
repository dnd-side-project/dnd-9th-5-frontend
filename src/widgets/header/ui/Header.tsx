import { usePathname } from 'next/navigation';

import { Spacing, Tab } from '@/shared';
import FilterTab from '@/shared/ui/Header/FilterTab';
import MyposeTab from '@/shared/ui/Header/MyposeTab';

export default function Header() {
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
