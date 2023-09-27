'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import IconButton from '../Button/IconButton';
import { Icon } from '../Icon';

export default function CloseButton() {
  const router = useRouter();
  return (
    <IconButton size="large" onClick={() => router.back()}>
      <Icon id="close" />
    </IconButton>
  );
}
