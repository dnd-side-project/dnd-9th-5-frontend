import { Header } from '@/components/Header';
import Image from 'next/image';

interface SubHeaderProps {
  text: string;
}
export default function SubHeader({ text }: SubHeaderProps) {
  const LeftNode = (
    <div className="flex">
      <h4>{text}</h4>
      <Image width={24} height={24} src="/icons/close.svg" alt="close" />
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
