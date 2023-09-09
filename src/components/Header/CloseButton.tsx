'use client';

import Image from 'next/image';
import Link from 'next/link';

import IconButton from '../Button/IconButton';

export default function CloseButton() {
  return (
    <Link href="/feed" scroll={false}>
      <IconButton size="large">
        <Image src="/icons/close.svg" width={24} height={24} alt="back" />
      </IconButton>
    </Link>
  );
}
