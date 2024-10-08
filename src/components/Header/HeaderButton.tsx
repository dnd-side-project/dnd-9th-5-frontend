'use client';

import { useRouter } from 'next/navigation';

import { IconButton } from '../Button';
import { ICON } from '@/constants';

export function CloseButton() {
  const router = useRouter();
  return (
    <IconButton
      icon={ICON.close.black}
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.replace('/feed');
      }}
    />
  );
}

export function MenuButton() {
  const router = useRouter();
  return (
    <IconButton
      icon={ICON.menu}
      onClick={() => {
        router.push('/menu');
      }}
    />
  );
}
