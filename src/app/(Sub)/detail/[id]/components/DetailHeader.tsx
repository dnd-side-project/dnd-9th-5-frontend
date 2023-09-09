'use client';
import Image from 'next/image';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import CloseButton from '@/components/Header/CloseButton';
import { Modal, PreparingModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function DetailHeader() {
  const { open } = useOverlay();

  return (
    <Header
      leftNode={<CloseButton />}
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
