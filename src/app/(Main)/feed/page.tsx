'use client';

import { QueryAsyncBoundary } from '@suspensive/react-query';

import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import FeedSection from './FeedSection';
import { usePoseFeedQuery } from '@/apis';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { MainHeader } from '@/components/Header';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';
import useFilterState from '@/hooks/useFilterState';

export default function Feed() {
  const { filterState } = useFilterState();
  const { data, fetchNextPage } = usePoseFeedQuery(filterState);

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
        <FeedSection data={data} fetchNextPage={fetchNextPage} />
        <FilterSheet />
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
