'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import EmptyCase from './components/EmptyCase';
import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import PhotoList from './components/PhotoList';
import { usePoseFeedQuery } from '@/apis';
import { Spacing } from '@/components/Spacing';
import { URL } from '@/constants/url';
import useDidMount from '@/hooks/useDidMount';
import useFilterState from '@/hooks/useFilterState';
import useIntersect from '@/hooks/useObserver';

export default function FeedSection() {
  const params = useSearchParams();
  const router = useRouter();

  const { filterState, updateFilterState } = useFilterState();
  const { data, fetchNextPage, hasNextPage, isLoading } = usePoseFeedQuery(filterState);

  useDidMount(() => {
    if (!params.get('filter')) return;
    updateFilterState({
      tags: new Array(params.get('filter') || ''),
      frameCount: 0,
      peopleCount: 0,
    });
    router.replace('/feed');
  });

  const onIntersect = useCallback(async () => {
    if (hasNextPage && !isLoading) {
      await fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isLoading]);

  const target = useIntersect(onIntersect);

  return (
    <>
      <FilterTab />
      <Spacing size={40} />
      <div className="h-fit overflow-y-scroll">
        {data?.pages[0].recommendation ? (
          <>
            <EmptyCase
              title={'신비한 포즈를 찾으시는군요!'}
              text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
              button={'문의사항 남기기'}
              path={URL.inquiry}
            />
            <h4 className="mb-16">이런 포즈는 어때요?</h4>
            <div className="columns-2	py-16">
              {data?.pages.map((page) => (
                <PhotoList
                  key={page.recommendedContents.number}
                  data={page.recommendedContents.content}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="columns-2	py-16">
            {data?.pages.map((page) => (
              <PhotoList key={page.filteredContents.number} data={page.filteredContents.content} />
            ))}
          </div>
        )}
        <div ref={target} className="h-1" />
      </div>
      <FilterSheet />
    </>
  );
}
