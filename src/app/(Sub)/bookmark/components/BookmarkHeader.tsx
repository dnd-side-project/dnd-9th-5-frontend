import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';

export default function BookmarkHeader() {
  const LeftNode = (
    <div className="flex">
      <Image src="/icons/arrow_back.svg" width={24} height={24} alt="back" />
      <Spacing size={12} direction="horizontal" />
      <h4>북마크</h4>
    </div>
  );
  const RightNode = <Image src="/icons/menu.svg" width={24} height={24} alt="back" />;

  return <Header leftNode={LeftNode} rightNode={RightNode} />;
}
