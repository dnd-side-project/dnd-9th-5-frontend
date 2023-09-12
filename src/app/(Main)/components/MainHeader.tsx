import Link from 'next/link';

import Tab from './Tab';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';

export default function MainHeader() {
  return (
    <Header
      leftNode={
        <Link href="/pick">
          <h4>PosePicker</h4>
        </Link>
      }
      rightNode={
        <Link href={'/menu'}>
          <Icon id="menu" />
        </Link>
      }
      headerDownNode={<Tab />}
      className="px-20"
    />
  );
}
