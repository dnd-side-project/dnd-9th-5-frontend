'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyposeTabData = [
  { title: '등록', path: '/mypose' },
  { title: '저장', path: '/mypose/bookmark' },
];

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
  return (
    <div className="h-72 px-20 py-12">
      <div className="flex h-full gap-4 rounded-8 bg-divider p-4 ">
        {MyposeTabData.map((item) => (
          <TabItem
            key={item.title}
            title={item.title}
            path={item.path}
            current={path === item.path}
          />
        ))}
      </div>
    </div>
  );
}
