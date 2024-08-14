'use client';

import { useState } from 'react';

import { Icon } from '../Button/Icon';
import { deleteBookmark, postBookmark } from '@/shared';
import LoginModal from '@/components/Login/LoginModal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { COOKIE_ACCESS_TOKEN } from '@/shared';
import { ICON } from '@/shared';
import { getClientCookie } from '@/utils';

interface BookmarkButtonI {
  poseId: number;
  isMarked: boolean;
}
export default function BookmarkButton({ poseId, isMarked }: BookmarkButtonI) {
  const { open } = useOverlay();
  const token = getClientCookie(COOKIE_ACCESS_TOKEN);
  const [marked, setMarked] = useState(isMarked);

  function onClick() {
    if (!token) {
      open(({ exit }) => <LoginModal onClose={exit} />);
      return;
    }
    if (marked) {
      deleteBookmark(poseId).then(() => {
        setMarked(false);
      });
    } else {
      postBookmark(poseId).then(() => {
        setMarked(true);
      });
    }
  }

  return (
    <button
      className="absolute bottom-6 right-6 h-36 w-36 rounded-24 bg-[#141218] bg-opacity-30 p-6"
      onClick={onClick}
    >
      <Icon icon={marked ? ICON.bookmark.white.fill : ICON.bookmark.white.empty} />
    </button>
  );
}
