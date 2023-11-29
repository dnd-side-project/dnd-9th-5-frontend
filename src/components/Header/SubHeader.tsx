'use client';
import { useRouter } from 'next/navigation';

import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';
import { ICON } from '@/constants/icon';
import { IconButton } from '../Button/Icon';

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
          icon={ICON.close.black}
          onClick={() => {
            if (document.referrer) router.back();
            else router.replace('/feed');
          }}
        />
        <Spacing size={12} direction="horizontal" />
        {title && <h4>{title}</h4>}
      </div>
      <div>{rightNode}</div>
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
