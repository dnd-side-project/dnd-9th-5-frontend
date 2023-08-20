import Image from 'next/image';

import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';

export default function MenuHeader() {
  const LeftNode = (
    <div className="flex">
      <Image width={24} height={24} src="/icons/close.svg" alt="back" />
      <Spacing size={12} direction="horizontal" />
      <h4>메뉴</h4>
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
