'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import IconButton from '../Button/IconButton';

export default function CloseButton() {
  const router = useRouter();
  return (
    <IconButton size="large" onClick={() => router.back()}>
      <Image src="/icons/close.svg" width={24} height={24} alt="back" />
    </IconButton>
  );
}
