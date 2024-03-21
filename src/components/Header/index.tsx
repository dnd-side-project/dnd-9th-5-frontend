import { PropsWithChildren } from 'react';

import { CloseButton, MenuButton } from './HeaderButton';
import Tab from './Tab';

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
    <div className="fixed inset-x-0 top-0 z-10 mx-auto max-w-440 bg-white">
      <div className="flex h-48 items-center justify-between gap-12 px-4 pt-8">
        {close ? <CloseButton /> : <div className="w-4" />}
        <h4 className="flex flex-1">{title}</h4>
        <div className="flex">{menu && <MenuButton />}</div>
      </div>
      {children}
    </div>
  );
}

export const MainHeader = ({ children }: PropsWithChildren) => (
  <Header title="PosePicker" menu={true}>
    <Tab />
    {children}
  </Header>
);
