import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';

export default function MenuHeader() {
  const LeftNode = (
    <div className="flex">
      <Image width={24} height={24} src="/icons/arrow_back.svg" alt="back" />
      <Spacing size={12} direction="horizontal" />
      <h4>메뉴</h4>
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
