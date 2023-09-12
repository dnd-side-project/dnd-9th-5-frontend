'use client';
import { useRouter } from 'next/navigation';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { PreparingModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function DetailHeader() {
  const { open } = useOverlay();
  const router = useRouter();

  return (
    <Header
      leftNode={
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="close" />
        </IconButton>
      }
      rightNode={
        <IconButton
          size="large"
          onClick={() => open(({ exit }) => <PreparingModal onClose={exit} />)}
        >
          <Icon id="bookmark" />
        </IconButton>
      }
      className="px-4"
    />
  );
}
