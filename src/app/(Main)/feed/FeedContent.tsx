'use client';

import Link from 'next/link';

import { usePoseFeedQuery } from '@/apis';
import { PrimaryButton } from '@/components/Button';
import EmptyCase from '@/components/Feed/EmptyCase';
import FeedSection from '@/components/Feed/FeedSection';
import { URL } from '@/constants';
import { useFilterState } from '@/hooks';
import { useEffect, useState } from 'react';
import { PoseFeedResponseI } from '@/server/type';
import { getPoseFeed } from '@/server/api';

export default function FeedContent() {
  const { filterState } = useFilterState();
  console.log('🚀 ~ FeedContent ~ filterState:', filterState);
  // const query = usePoseFeedQuery(filterState);

  const [data, setData] = useState<PoseFeedResponseI | null>(null);
  async function fetchPoseFeed() {
    const res = await getPoseFeed(
      filterState.peopleCount,
      filterState.frameCount,
      filterState.tags.join(',')
    );
    console.log('🚀 ~ fetchPoseFeed ~ res:', res);
    setData(res.data);
  }
  useEffect(() => {
    fetchPoseFeed();
  }, []);

  return (
    <FeedSection data={data}>
      <EmptyCase
        title={'신비한 포즈를 찾으시는군요!'}
        text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
      >
        <Link href={URL.inquiry}>
          <PrimaryButton text={'문의사항 남기기'} />
        </Link>
      </EmptyCase>
    </FeedSection>
  );
}
