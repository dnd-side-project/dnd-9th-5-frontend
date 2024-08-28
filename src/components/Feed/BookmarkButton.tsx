'use client';

import { useState } from 'react';

import { Icon, IconButton } from '../Button/Icon';
import { deleteBookmark, postBookmark } from '@/apis';
import LoginModal from '@/components/Login/LoginModal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { COOKIE_ACCESS_TOKEN } from '@/constants';
import { ICON } from '@/constants';
import { getClientCookie } from '@/utils';

interface BookmarkButtonI {
  poseId: number;
  isMarked: boolean;
  style?: 'circle' | 'black';
}
export default function BookmarkButton({ poseId, isMarked, style = 'circle' }: BookmarkButtonI) {
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

  if (style === 'black') {
    return (
      <IconButton
        icon={marked ? ICON.bookmark.black.fill : ICON.bookmark.black.empty}
        onClick={onClick}
      />
    );
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
