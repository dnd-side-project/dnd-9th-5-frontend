'use client';

import { useRouter } from 'next/navigation';

import { IconButton } from '../Button';
import { ICON } from '@/constants/icon';

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
