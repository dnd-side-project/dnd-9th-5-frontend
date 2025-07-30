'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { IconButton } from '../common/Button';
import { Spacing } from '../Spacing';
import { ICON } from '@/constants';

interface Header {
  title?: string;
  left?: JSX.Element;
  right?: JSX.Element[];
}

// region Header
export default function Header({ title = '', left, right, children }: PropsWithChildren<Header>) {
  return (
    <>
      <Spacing size={48} />
      <div className="fixed inset-x-0 top-0 z-30 mx-auto max-w-layout bg-white">
        <div className="flex h-48 items-center justify-between gap-12 px-4 pt-8">
          {left ?? <div className="w-4" />}
          <h4 className="flex flex-1">{title}</h4>
          <div className="flex">{right}</div>
        </div>
        {children}
      </div>
    </>
  );
}

// region Buttons
interface CloseButtonI {
  onClick?(): void;
}
export function CloseButton({ onClick }: CloseButtonI) {
  const router = useRouter();
  return <IconButton icon={ICON.close.black} onClick={onClick ? onClick : () => router.back()} />;
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
