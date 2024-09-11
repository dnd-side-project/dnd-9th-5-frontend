'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMyposeCountQuery } from '@/apis';
import { COOKIE_ACCESS_TOKEN } from '@/constants';
import { getClientCookie } from '@/utils';

const Data = {
  upload: { title: '등록', path: '/mypose' },
  bookmark: { title: '저장', path: '/mypose/bookmark' },
};

interface TabItemI {
  title: string;
  path: string;
  current: boolean;
}
const TabItem = ({ title, path, current }: TabItemI) =>
  current ? (
    <Link href={path} className="flex flex-1 items-center justify-center rounded-8 bg-white">
      <div id="subtitle-1" className="text-main-violet">
        {title}
      </div>
    </Link>
  ) : (
    <Link href={path} className="flex flex-1 items-center justify-center rounded-8">
      <div id="subtitle-1" className="text-tertiary">
        {title}
      </div>
    </Link>
  );

export default function MyposeTab() {
  const path = usePathname();
  const accesstoken = getClientCookie(COOKIE_ACCESS_TOKEN);

  const { data: countData } = useMyposeCountQuery({ enabled: accesstoken !== '' });
  const uploadCount = countData === undefined ? 0 : countData.uploadCount;
  const bookmarkCount = countData === undefined ? 0 : countData.bookmarkCount;

  return (
    <div className="h-72 px-20 py-12">
      <div className="flex h-full gap-4 rounded-8 bg-divider p-4 ">
        <TabItem
          key="upload"
          title={`${Data.upload.title} ${uploadCount}`}
          path={Data.upload.path}
          current={path === Data.upload.path}
        />
        <TabItem
          key="bookmark"
          title={`${Data.bookmark.title} ${bookmarkCount}`}
          path={Data.bookmark.path}
          current={path === Data.bookmark.path}
        />
      </div>
    </div>
  );
}
