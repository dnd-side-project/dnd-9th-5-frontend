'use client';

import { ICON } from '@/constants/icon';
import { IconButton } from '../Button/Icon';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();

  return (
    <IconButton
      icon={ICON.close.black}
      onClick={() => {
        if (document.referrer) router.back();
        else router.replace('/feed');
      }}
    />
  );
}
