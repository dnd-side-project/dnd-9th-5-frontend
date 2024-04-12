'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabData = [
  { path: '/pick', title: '포즈픽' },
  { path: '/talk', title: '포즈톡' },
  { path: '/feed', title: '포즈피드' },
  { path: '/mypose/bookmark', title: '마이포즈' },
] as const;

export default function Tab() {
  const curPath = usePathname();

  return (
    <nav className="flex h-48 items-center gap-16 border-b-2 border-b-divider px-20">
      {tabData.map((item) => (
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
