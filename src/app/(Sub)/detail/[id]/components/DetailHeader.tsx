'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import { PreparingModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function DetailHeader() {
  const { open } = useOverlay();
  const router = useRouter();

  return (
    <Header
      leftNode={
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/close.svg" width={24} height={24} alt="back" />
        </IconButton>
      }
      rightNode={
        <IconButton
          size="large"
          onClick={() => open(({ exit }) => <PreparingModal onClose={exit} />)}
        >
          <Image src="/icons/bookmark.svg" width={24} height={24} alt="bookmark" />
        </IconButton>
      }
      className="px-4"
    />
  );
}
