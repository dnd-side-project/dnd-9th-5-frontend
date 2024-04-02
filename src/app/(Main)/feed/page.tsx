'use client';

import { QueryAsyncBoundary } from '@suspensive/react-query';
import Link from 'next/link';

import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import { usePoseFeedQuery } from '@/apis';
import { PrimaryButton } from '@/components/Button';
import { RejectedFallback } from '@/components/ErrorBoundary';
import EmptyCase from '@/components/Feed/EmptyCase';
import FeedSection from '@/components/Feed/FeedSection';
import { MainHeader } from '@/components/Header';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';
import { URL } from '@/constants/url';
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
        <FeedSection data={data} fetchNextPage={fetchNextPage}>
          <EmptyCase
            title={'신비한 포즈를 찾으시는군요!'}
            text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
          >
            <Link href={URL.inquiry}>
              <PrimaryButton text={'문의사항 남기기'} />
            </Link>
          </EmptyCase>
        </FeedSection>
        <FilterSheet />
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
