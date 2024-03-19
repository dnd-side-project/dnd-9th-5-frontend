'use client';

import { Icon } from '../Button/Icon';
import { PreparingPopup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ICON } from '@/constants/icon';

export default function BookmarkButton() {
  const { open } = useOverlay();

  return (
    <div
      className="absolute bottom-6 right-6 h-36 w-36 rounded-24 bg-[#141218] bg-opacity-30 p-6"
      onClick={(e) => {
        e.preventDefault();
        open(({ exit }) => <PreparingPopup onClose={exit} />);
      }}
    >
      <Icon icon={ICON.bookmark.white.empty} />
    </div>
  );
}
