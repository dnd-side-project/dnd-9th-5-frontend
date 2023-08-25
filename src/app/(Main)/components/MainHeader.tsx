import Image from 'next/image';
import Link from 'next/link';

import Tab from './Tab';
import { Header } from '@/components/Header';

export default function MainHeader() {
  return (
    <Header
      leftNode={
        <Link href="/pick">
          <h4>PosePicker</h4>
        </Link>
      }
      rightNode={<Image src="/icons/menu.svg" width={24} height={24} alt="24" />}
      headerDownNode={<Tab />}
      className="px-20"
    />
  );
}
