'use client';

import { PropsWithChildren, ReactNode } from 'react';

import { Spacing } from '../Spacing';
import { IconButton } from '../common/Button';
import { ICON } from '@/constants';
import { useRouter } from 'next/navigation';

interface Header {
  title?: string;
  close?: boolean;
  menu?: boolean;
  additional?: ReactNode;
}

// region Header
export default function Header({
  title = '',
  close = false,
  menu = false,
  additional,
  children,
}: PropsWithChildren<Header>) {
  return (
    <>
      <Spacing size={48} />
      <div className="fixed inset-x-0 top-0 z-30 mx-auto max-w-layout bg-white">
        <div className="flex h-48 items-center justify-between gap-12 px-4 pt-8">
          {close ? <CloseButton /> : <div className="w-4" />}
          <h4 className="flex flex-1">{title}</h4>
          <div className="flex">
            {additional}
            {menu && <MenuButton />}
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

// region Buttons
function CloseButton() {
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

function MenuButton() {
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
