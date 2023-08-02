'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabData = [
  { path: '/pick', title: '포즈픽' },
  { path: '/talk', title: '포즈톡' },
  { path: '/feed', title: '포즈피드' },
];

export default function Tab() {
  const path = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {tabData.map((item) =>
        item.path === path ? (
          <div className="border-b-main-violet border-b-2 py-3" key={item.path}>
            <h5 className="text-brand">{item.title}</h5>
          </div>
        ) : (
          <Link href={item.path} className="py-3" key={item.path}>
            <h5 className="text-secondary">{item.title}</h5>
          </Link>
        )
      )}
    </nav>
  );
}
