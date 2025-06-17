'use client';

import { usePathname } from 'next/navigation';

import MyposeTab from '@/app/(Main)/mypose/MyposeTab';
import Header from '@/components/Layout/Header';
import { Spacing } from '@/components/Spacing';
import Link from 'next/link';
import PoseFeedFilterTab from './PoseFeedFilterTab';

// region MainHeader
export default function MainHeader() {
  const curPath = usePathname();
  const isFeedPage = curPath.includes('/feed');
  const isMyposePage = curPath.includes('/mypose');

  return (
    <>
      <Spacing size={48} />
      {isFeedPage && <Spacing size={56} />}
      {isMyposePage && <Spacing size={72} />}
      <Header title="PosePicker" menu={true}>
        <Navigation />
        {/* {isFeedPage && <PoseFeedFilterTab />} */}
        {isMyposePage && <MyposeTab />}
      </Header>
    </>
  );
}

// region Tab
const navigationData = [
  { path: '/pick', title: '포즈픽' },
  { path: '/talk', title: '포즈톡' },
  { path: '/feed', title: '포즈피드' },
  { path: '/mypose/bookmark', title: '마이포즈' },
] as const;

function Navigation() {
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
