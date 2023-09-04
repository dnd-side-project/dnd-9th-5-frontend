import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';
import CloseButton from '@/components/Header/CloseButton';

export default function MenuHeader() {
  const LeftNode = (
    <div className="flex items-center px-20">
      <CloseButton />
      <Spacing size={12} direction="horizontal" />
      <h4>메뉴</h4>
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
