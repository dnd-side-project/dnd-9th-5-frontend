import Link from 'next/link';
import { PropsWithChildren } from 'react';

import CloseButton from './CloseButton';
import Tab from './Tab';
import { IconButton } from '../Button';
import { ICON } from '@/constants/icon';

interface Header {
  title?: string;
  close?: boolean;
  menu?: boolean;
}

function Header({ title = '', close = false, menu = false, children }: PropsWithChildren<Header>) {
  return (
    <div className="fixed inset-x-0 top-0 z-10 mx-auto max-w-440 bg-white">
      <div className="flex h-48 items-center justify-between gap-12 px-4 pt-8">
        {close ? <CloseButton /> : <div className="w-4" />}
        <h4 className="flex flex-1">{title}</h4>
        <div className="flex">
          {menu && (
            <>
              <Link href="/bookmark">
                <IconButton icon={ICON.bookmark.black} />
              </Link>
              <Link href="/menu">
                <IconButton icon={ICON.menu} />
              </Link>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export const DetailHeader = () => <Header close={true} menu={true} />;
export const MenuHeader = () => <Header close={true} title="메뉴" />;

export const MainHeader = ({ children }: PropsWithChildren) => (
  <Header title="PosePicker" menu={true}>
    <Tab />
    {children}
  </Header>
);
