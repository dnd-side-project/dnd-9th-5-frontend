'use client';

import { UseSuspenseInfiniteQueryResultOnSuccess } from '@suspensive/react-query';
import { PropsWithChildren, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PoseFeedContents, PoseFeedResponse } from '@/shared';
import PhotoList from '@/components/Feed/PhotoList';

interface FeedSecionI extends PropsWithChildren {
  query: UseSuspenseInfiniteQueryResultOnSuccess<PoseFeedContents | PoseFeedResponse>;
}

export default function FeedSection({ children, query }: FeedSecionI) {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, refetch } = query;

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if ('filteredContents' in data.pages[0])
    return (
      <div>
        {data.pages[0].filteredContents.empty ? (
          children
        ) : (
          <div className="columns-2">
            {data.pages.map((page) => {
              const poseListData = 'filteredContents' in page ? page.filteredContents : page;
              return <PhotoList key={poseListData.number} data={poseListData} />;
            })}
          </div>
        )}
        {data.pages[0]?.recommendation && (
          <>
            <h4 className="mb-16">이런 포즈는 어때요?</h4>
            <div className="columns-2">
              {data.pages.map((page) => {
                const poseListData =
                  'recommendedContents' in page ? page.recommendedContents : page;
                return <PhotoList key={poseListData.number} data={poseListData} />;
              })}
            </div>
          </>
        )}
        <div ref={ref} />
      </div>
    );
  return (
    <div>
      {data.pages[0].empty ? (
        children
      ) : (
        <div className="columns-2">
          {data.pages.map(
            (page) => 'content' in page && <PhotoList key={page.number} data={page} />
          )}
        </div>
      )}
      <div ref={ref} />
    </div>
  );
}
