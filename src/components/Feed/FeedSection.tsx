'use client';

import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { PropsWithChildren, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PoseFeedResponse } from '@/apis';
import PhotoList from '@/components/Feed/PhotoList';

interface FeedSecionI extends PropsWithChildren {
  data: InfiniteData<PoseFeedResponse>;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<PoseFeedResponse, unknown>>;
}

export default function FeedSection({ data, fetchNextPage, children }: FeedSecionI) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <div>
      {data.pages[0].filteredContents.empty ? (
        children
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
  );
}
