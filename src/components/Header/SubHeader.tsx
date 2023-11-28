'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';

interface MenuHeader {
  title?: string;
  rightNode?: React.ReactNode;
}
export default function SubHeader({ title, rightNode }: MenuHeader) {
  const router = useRouter();
  const LeftNode = (
    <div className="flex items-center px-4">
      <div className="flex items-center">
        <IconButton
          size="large"
          onClick={() => {
            if (document.referrer) router.back();
            else router.replace('/feed');
          }}
        >
          <Image src="/sprite/icons/close.svg" width={24} height={24} alt="close" />
        </IconButton>
        <Spacing size={12} direction="horizontal" />
        {title && <h4>{title}</h4>}
      </div>
      <div>{rightNode}</div>
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
