'use client';

import Image from 'next/image';
import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import { PreparingModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import Link from 'next/link';
import { ICON } from '@/constants/icon';

export default function DetailHeader() {
  const { open } = useOverlay();

  return (
    <Header
      leftNode={
        <Link href={'/feed'}>
          <IconButton size="large">
            <Image src="/icons/close.svg" width={24} height={24} alt="back" />
          </IconButton>
        </Link>
      }
      rightNode={
        <IconButton
          size="large"
          onClick={() => open(({ exit }) => <PreparingModal onClose={exit} />)}
        >
          <Image src={ICON.bookmark.black} width={24} height={24} alt="bookmark" />
        </IconButton>
      }
      className="px-4"
    />
  );
}
