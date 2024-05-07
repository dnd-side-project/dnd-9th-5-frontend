import { PropsWithChildren } from 'react';

import Banner from './Banner';
import { CloseButton, MenuButton } from './HeaderButton';
import { Spacing } from '../Spacing';

interface Header {
  title?: string;
  close?: boolean;
  menu?: boolean;
}

export default function Header({
  title = '',
  close = false,
  menu = false,
  children,
}: PropsWithChildren<Header>) {
  return (
    <>
      <Spacing size={48} />
      <div id="ios-banner">
        <Spacing size={62} />
      </div>
      <div id="ios-banner">
        <Banner />
      </div>
      <div className="fixed inset-x-0 top-0 z-30 mx-auto max-w-440 bg-white">
        <div className="flex h-48 items-center justify-between gap-12 px-4 pt-8">
          {close ? <CloseButton /> : <div className="w-4" />}
          <h4 className="flex flex-1">{title}</h4>
          <div className="flex">{menu && <MenuButton />}</div>
        </div>
        {children}
      </div>
    </>
  );
}
