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
    <nav className="fixed inset-x-0 top-64 mx-auto flex h-48 items-center  gap-16 border-b-2 border-b-divider px-20">
      {tabData.map((item) => (
        <div key={item.path}>
          {item.path === path ? (
            <>
              <div className="py-12">
                <h5 className="text-brand">{item.title}</h5>
              </div>
              <div className="relative top-0.5 border-b-2 border-b-main-violet" />
            </>
          ) : (
            <Link className="py-12" href={item.path}>
              <h5>{item.title}</h5>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
