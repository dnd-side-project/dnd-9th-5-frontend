'use client';

import { Spacing } from '@/components/Spacing';
import EmptyCase from './components/EmptyCase';
import Filter from './components/Filter';
import FilterSheet from './components/FilterSheet';
import PhotoList from './components/PhotoList';
import { usePoseFeedQuery } from '@/apis';

export default function Feed() {
  const { refetch, data } = usePoseFeedQuery({ peopleCount: 0, frameCount: 0, tags: '' });

  return (
    <>
      <Filter />
      <div>
        <Spacing size={40} />
        {data &&
          (data.recommendation ? (
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
          ) : (
            <PhotoList data={data.filteredContents.content} />
          ))}
      </div>
      <FilterSheet />
    </>
  );
}
