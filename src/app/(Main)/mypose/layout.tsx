import Link from 'next/link';

import LoginSection from './components/LoginSection';
import { StrictPropsWithChildren } from '@/types';

export default function Layout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <LoginSection />
      <ul className="flex">
        <li>
          <Link href="/mypose">등록</Link>
        </li>
        <li>
          <Link href="/mypose/bookmark">저장</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
