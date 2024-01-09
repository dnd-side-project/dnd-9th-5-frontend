'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import FilterSheet from './components/FilterSheet';
import FilterTab from './components/FilterTab';
import { usePoseFeedQuery } from '@/apis';
import EmptyCase from '@/components/Feed/EmptyCase';
import PhotoList from '@/components/Feed/PhotoList';
import { MainHeader } from '@/components/Header';
import { Spacing } from '@/components/Spacing';
import { URL } from '@/constants/url';
import useFilterState from '@/hooks/useFilterState';

export default function FeedSection() {
  const { filterState } = useFilterState();
  const { data, fetchNextPage } = usePoseFeedQuery(filterState);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <MainHeader>
        <FilterTab />
      </MainHeader>
      <Spacing size={50} />
      <div>
        {data.pages[0].filteredContents.empty ? (
          <EmptyCase
            title={'신비한 포즈를 찾으시는군요!'}
            text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
            button={'문의사항 남기기'}
            path={URL.inquiry}
          />
        ) : (
          <div className="columns-2	py-16">
            {data.pages.map((page) => (
              <PhotoList key={page.filteredContents.number} data={page.filteredContents.content} />
            ))}
          </div>
        )}
        {data.pages[0].recommendation && (
          <>
            <h4 className="mb-16">이런 포즈는 어때요?</h4>
            <div className="columns-2	py-16">
              {data.pages.map((page) => (
                <PhotoList
                  key={page.recommendedContents.number}
                  data={page.recommendedContents.content}
                />
              ))}
            </div>
          </>
        )}
        <div ref={ref} />
      </div>
      <FilterSheet />
    </>
  );
}
