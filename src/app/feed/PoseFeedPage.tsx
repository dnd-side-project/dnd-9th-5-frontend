'use client';

import Link from 'next/link';

import EmptyCase from '@/components/Feed/EmptyCase';
import Masonry from '@/components/Feed/Masonry';
import { URL } from '@/constants';
import { useFilterState } from '@/hooks';
import { useEffect, useState } from 'react';
import { PoseFeedResponseI } from '@/server/type';
import { getPoseFeed } from '@/server/api';
import PrimaryButton from '@/components/common/Button';
import { FilterStateI } from './page';

interface PoseFeedPageI {
  filterState: FilterStateI;
}

export default function PoseFeedPage({ filterState }: PoseFeedPageI) {
  // const { filterState } = useFilterState();
  // const query = usePoseFeedQuery(filterState);
  const [data, setData] = useState<PoseFeedResponseI | null>(null);

  async function fetchPoseFeed() {
    const res = await getPoseFeed(filterState.people, filterState.cut, [].join(','));
    setData(res.data);
  }

  useEffect(() => {
    fetchPoseFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <Masonry data={data}>
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
