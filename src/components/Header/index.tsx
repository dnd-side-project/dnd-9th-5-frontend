import { PropsWithChildren, ReactNode } from 'react';

import { CloseButton, MenuButton } from './HeaderButton';
import { Spacing } from '../Spacing';

interface Header {
  title?: string;
  close?: boolean;
  menu?: boolean;
  additional?: ReactNode;
}

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
