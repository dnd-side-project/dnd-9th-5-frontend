'use client';

import { Spacing } from '@/components/Spacing';
import EmptyCase from './components/EmptyCase';
import FilterTab from './components/FilterTab';
import FilterSheet from './components/FilterSheet';
import PhotoList from './components/PhotoList';
import { usePoseFeedQuery } from '@/apis';
import useFilterState from '@/hooks/useFilterState';

export default function Feed() {
  const { filterState } = useFilterState();
  const { data, isFetched } = usePoseFeedQuery(filterState);

  return (
    <>
      <FilterTab />
      <Spacing size={56} />
      <div>
        {data?.recommendation && (
          <>
            <EmptyCase
              title={'신비한 포즈를 찾으시는군요!'}
              text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
              button={'문의사항 남기기'}
              path={''}
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
