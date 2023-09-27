'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import { Spacing } from '@/components/Spacing';

export default function MenuHeader() {
  const router = useRouter();
  const LeftNode = (
    <div className="flex items-center px-4">
      <IconButton size="large" onClick={() => router.back()}>
        <Image src="/sprite/icons/close.svg" width={24} height={24} alt="close" />
      </IconButton>

      <Spacing size={12} direction="horizontal" />
      <h4>메뉴</h4>
    </div>
  );

  return <Header leftNode={LeftNode} />;
}
