'use client';

import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PoseFeedResponse } from '@/apis';
import { PrimaryButton } from '@/components/Button';
import EmptyCase from '@/components/Feed/EmptyCase';
import PhotoList from '@/components/Feed/PhotoList';
import { URL } from '@/constants/url';

interface FeedSecionI {
  data: InfiniteData<PoseFeedResponse>;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<PoseFeedResponse, unknown>>;
}
export default function FeedSection({ data, fetchNextPage }: FeedSecionI) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <div>
      {data.pages[0].filteredContents.empty ? (
        <EmptyCase
          title={'신비한 포즈를 찾으시는군요!'}
          text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
        >
          <Link href={URL.inquiry}>
            <PrimaryButton text={'문의사항 남기기'} />
          </Link>
        </EmptyCase>
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
