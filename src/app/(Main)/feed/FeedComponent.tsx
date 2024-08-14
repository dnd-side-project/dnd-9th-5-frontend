'use client';

import { QueryAsyncBoundary } from '@suspensive/react-query';

import FeedContent from './FeedContent';
import FilterSheet from './FilterSheet';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';

export default function FeedComponent() {
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
