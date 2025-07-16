'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FilterStateI } from '../../app/feed/page';
import PrimaryButton from '@/components/common/Button';
import EmptyCase from '@/components/Feed/EmptyCase';
import Masonry from '@/components/Feed/Masonry';
import { URL } from '@/constants';
import { getPoseFeed } from '@/server/api';
import { PoseFeedResponseI } from '@/server/type';

interface PoseFeedPageI {
  filterState: FilterStateI;
  initialData: PoseFeedResponseI;
}

export default function PoseFeedPage({ filterState, initialData }: PoseFeedPageI) {
  const [data, setData] = useState<PoseFeedResponseI | null>(initialData);
  const [loading, setLoading] = useState<'new' | 'more' | false>(false);

  async function fetchNewFeed() {
    setLoading('new');
    const res = await getPoseFeed(filterState, null);
    setData(res.data);
    setLoading(false);
  }

  async function fetchMoreFeed() {
    setLoading('more');
    const nextCursor = data?.pagination.hasMore ? data?.pagination.nextCusor : null;
    const res = await getPoseFeed(filterState, nextCursor);
    setData((prev) => {
      if (!prev) return res.data;
      return {
        contents: [...prev.contents, ...res.data.contents],
        pagination: res.data.pagination,
      };
    });
    setLoading(false);
  }

  useEffect(() => {
    fetchNewFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <Masonry data={data} loading={loading} fetchMore={fetchMoreFeed}>
      <EmptyCase
        title={'신비한 포즈를 찾으시는군요!'}
        text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
      >
        <Link href={URL.inquiry}>
          <PrimaryButton text={'문의사항 남기기'} />
        </Link>
      </EmptyCase>
    </Masonry>
  );
}
