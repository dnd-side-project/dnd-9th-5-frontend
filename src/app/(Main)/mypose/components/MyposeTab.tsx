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
      <span className="text-main-violet">{title}</span>
    </Link>
  ) : (
    <Link href={path} className="flex flex-1 items-center justify-center rounded-8">
      <span className="text-tertiary">{title}</span>
    </Link>
  );

export default function MyposeTab() {
  const path = usePathname();
  return (
    <div className="flex h-48 gap-4 rounded-8 bg-divider p-4">
      {MyposeTabData.map((item) => (
        <TabItem
          key={item.title}
          title={item.title}
          path={item.path}
          current={path === item.path}
        />
      ))}
    </div>
  );
}
