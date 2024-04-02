import { QueryAsyncBoundary } from '@suspensive/react-query';

import LoginSection from './components/LoginSection';
import MyposeTab from './components/MyposeTab';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { StrictPropsWithChildren } from '@/types';

export default function Layout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <LoginSection />
      <MyposeTab />
      <QueryAsyncBoundary
        rejectedFallback={RejectedFallback}
        pendingFallback={<Loading className="h-[calc(100dvh-178px)]" />}
      >
        {children}
      </QueryAsyncBoundary>
    </>
  );
}
