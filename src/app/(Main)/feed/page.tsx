'use client';

import { QueryAsyncBoundary } from '@suspensive/react-query';

import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import FeedContent from './FeedContent';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { MainHeader } from '@/components/Header';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

export default function Feed() {
  return (
    <QueryAsyncBoundary
      rejectedFallback={RejectedFallback}
      pendingFallback={<Loading className="h-[calc(100dvh-178px)]" />}
    >
      <PageAnimation>
        <MainHeader>
          <FilterTab />
        </MainHeader>
        <Spacing size={50} />
        <FeedContent />
        <FilterSheet />
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
