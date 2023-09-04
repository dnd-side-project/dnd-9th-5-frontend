'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import EmptyCase from './components/EmptyCase';
import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import PhotoList from './components/PhotoList';
import { usePoseFeedQuery } from '@/apis';
import { Spacing } from '@/components/Spacing';
import useDidMount from '@/hooks/useDidMount';
import useFilterState from '@/hooks/useFilterState';
import { URL } from '@/constants/url';

export default function Feed() {
  const params = useSearchParams();
  const router = useRouter();

  const { filterState, updateFilterState } = useFilterState();
  const { data, isFetched } = usePoseFeedQuery(filterState);

  useDidMount(() => {
    if (!params.get('filter')) return;
    updateFilterState({
      tags: new Array(params.get('filter') || ''),
      frameCount: 0,
      peopleCount: 0,
    });
    router.replace('/feed');
  });

  return (
    <>
      <FilterTab />
      <Spacing size={40} />
      <div className="h-fit overflow-y-scroll">
        {data?.recommendation && (
          <>
            <EmptyCase
              title={'신비한 포즈를 찾으시는군요!'}
              text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
              button={'문의사항 남기기'}
              path={URL.inquiry}
            />

            <h4 className="mb-16">이런 포즈는 어때요?</h4>
            <PhotoList data={data.recommendedContents.content} />
          </>
        )}
        {isFetched ? <PhotoList data={data?.filteredContents.content} /> : <PhotoList />}
      </div>
      <FilterSheet />
    </>
  );
}
