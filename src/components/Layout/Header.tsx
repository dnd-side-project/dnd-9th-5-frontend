'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { Icon, IconButton } from '../common/Button';
import { Tag } from '../common/Selection';
import { Spacing } from '../Spacing';
import { FilterStateI } from '@/app/feed/page';
import { ICON } from '@/constants';
import { useBottomSheet } from '@/hooks';
import cn from '@/utils/cn';

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

// region Navigation
const navigationData = [
  { path: '/pick', title: '포즈픽' },
  { path: '/talk', title: '포즈톡' },
  { path: '/feed', title: '포즈피드' },
  { path: '/mypose/bookmark', title: '마이포즈' },
] as const;

export function Navigation() {
  const curPath = usePathname();

  return (
    <nav className="flex h-48 items-center gap-16 border-b-2 border-b-divider px-20">
      {navigationData.map((item) => (
        <div key={item.path}>
          {item.path.includes(curPath) ? (
            <div className="relative py-12">
              <h5 id="subtitle-1" className="text-brand">
                {item.title}
              </h5>
              <div className="absolute bottom-0 left-0 w-full border-b-2 border-main-violet" />
            </div>
          ) : (
            <Link className="py-12 text-tertiary" href={item.path} as={item.path}>
              <h5>{item.title}</h5>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

// region PoseFeedFilterTab
interface Props {
  filterState: FilterStateI;
}

export function PoseFeedFilterTab({ filterState }: Props) {
  const { people, cut, tags } = filterState;
  const { openBottomSheet } = useBottomSheet();

  const isFiltered = !(people === 0 && cut === 0 && tags.length === 0);

  return (
    <div className="flex h-56 items-center gap-8 bg-white px-20">
      <button
        className={cn('flex min-w-fit items-center gap-8 rounded-8 px-16 py-9', {
          'border-1 border-main-violet bg-main-violet-base text-main-violet': isFiltered,
          'bg-sub-white': !isFiltered,
        })}
        onClick={openBottomSheet}
      >
        <h5 id="subtitle-2">필터</h5>
        <Icon icon={isFiltered ? 'carat_down' : 'carat_down_gray'} />
      </button>

      {isFiltered && (
        <>
          <div className="text-divider">|</div>
          <div className="flex gap-8 overflow-x-scroll">
            {people !== 0 && <Tag key="people" text={`${people}인`} />}
            {cut !== 0 && <Tag key="cut" text={`${cut}컷`} />}
            {tags.map((tag) => (
              <Tag
                key={tag}
                text={tag}
                // onClick={() => deleteSelectedFilterItem(tag)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
