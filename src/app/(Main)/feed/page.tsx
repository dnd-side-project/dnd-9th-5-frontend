'use client';

import { QueryAsyncBoundary } from '@suspensive/react-query';

import FilterSheet from './components/FilterSheet';
import FeedContent from './FeedContent';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';

export default function Feed() {
  return (
    <QueryAsyncBoundary
      rejectedFallback={RejectedFallback}
      pendingFallback={<Loading className="h-[calc(100dvh-178px)]" />}
    >
      <PageAnimation>
        <FeedContent />
        <FilterSheet />
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
