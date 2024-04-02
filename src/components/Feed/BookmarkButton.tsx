'use client';

import { useState } from 'react';

import { Icon } from '../Button/Icon';
import { deleteBookmark, postBookmark } from '@/apis';
import LoginModal from '@/app/(Main)/mypose/components/LoginModal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ICON } from '@/constants/icon';
import useUserState from '@/context/userState';

interface BookmarkButtonI {
  poseId: number;
  isMarked: boolean;
}
export default function BookmarkButton({ poseId, isMarked }: BookmarkButtonI) {
  const { open } = useOverlay();
  const { token } = useUserState();
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
