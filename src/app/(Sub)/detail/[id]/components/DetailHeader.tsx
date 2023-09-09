'use client';
import Image from 'next/image';

import IconButton from '@/components/Button/IconButton';
import { Header } from '@/components/Header';
import CloseButton from '@/components/Header/CloseButton';
import { Modal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function DetailHeader() {
  const { open } = useOverlay();

  return (
    <Header
      leftNode={<CloseButton />}
      rightNode={
        <IconButton
          size="large"
          onClick={() =>
            open(({ exit }) => (
              <Modal onClick={exit} className="cursor-pointer rounded-8" onCloseOutside={exit}>
                <p>해당 기능은 아직 준비중이에요!</p>
                <p> 업데이트를 기대해 주세요.</p>
              </Modal>
            ))
          }
        >
          <Image src="/icons/bookmark.svg" width={24} height={24} alt="bookmark" />
        </IconButton>
      }
      className="px-4"
    />
  );
}
