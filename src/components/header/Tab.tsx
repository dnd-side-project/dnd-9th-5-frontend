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
    <nav className="flex items-center gap-16">
      {tabData.map((item) => (
        <div key={item.path}>
          {item.path === path ? (
            <>
              <div className="py-12">
                <h5 id="subtitle-1" className="text-brand">
                  {item.title}
                </h5>
              </div>
              <div className="border-b-main-violet relative top-0.5 border-b-2" />
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
