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

  async function fetchPoseFeed() {
    setData(null);
    const res = await getPoseFeed(filterState);
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
