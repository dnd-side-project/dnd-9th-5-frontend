import { QueryAsyncBoundary } from '@suspensive/react-query';

import LoginSection from './components/LoginSection';
import MyposeTab from './components/MyposeTab';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { StrictPropsWithChildren } from '@/types';

export default function Layout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <LoginSection />
      <MyposeTab />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>{children}</QueryAsyncBoundary>
    </>
  );
}
