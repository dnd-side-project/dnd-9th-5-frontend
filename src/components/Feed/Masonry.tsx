'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import BookmarkButton from './BookmarkButton';
import PrimaryButton from '../common/Button';
import { FilterStateI } from '@/app/feed/page';
import { PoseDataI, PoseFeedResponseI } from '@/server/type';
import { poseFeedAtom } from '@/store/atom';
import cn from '@/utils/cn';

// region Masonry
interface MasonryI extends PropsWithChildren {
  data: PoseFeedResponseI | null;
  filterState?: FilterStateI;
  loading?: 'new' | 'more' | false;
  fetchMore?: () => void;
}

export default function Masonry({ children, data, loading, fetchMore, filterState }: MasonryI) {
  const router = useRouter();
  const setCachedData = useSetRecoilState(poseFeedAtom);

  if (loading === 'new' || !data) {
    return <Loading />;
  }

  if (data.contents.length === 0) {
    return children;
  }

  function onClickImage(idx: number, poseId: string) {
    setCachedData({
      filterState,
      selectedIdx: idx,
      feedData: data as PoseFeedResponseI,
    });
    return router.push(`/detail/${poseId}?fromFeed=true`);
  }

  return (
    <div>
      <div className="columns-2">
        {data.contents.map((content, idx) => (
          <Photo key={content.id} data={content} onClick={() => onClickImage(idx, content.id)} />
        ))}
      </div>
      {data.pagination.hasMore && (
        <PrimaryButton
          variant={loading === 'more' ? 'secondary' : 'outline'}
          onClick={fetchMore}
          text={loading === 'more' ? '로딩중...' : '더보기'}
          className="mb-16 w-full"
          disabled={loading === 'more'}
        />
      )}
    </div>
  );
}

// region Photo
interface PhotoI {
  data: PoseDataI;
  onClick: () => void;
}
function Photo({ data, onClick }: PhotoI) {
  const { source, image, id } = data;
  const aspectRatio = image.size ? image.size.width / image.size.height : 1;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mb-16 inline-block w-full cursor-pointer rounded-8">
      <Image
        src={image.url}
        alt={source || ''}
        width={200}
        height={0}
        style={{
          objectFit: 'contain',
          borderRadius: 8,
          width: '100%',
          height: 'auto',
        }}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
      />
      {loaded && <BookmarkButton isMarked={false} poseId={parseInt(id)} />}
      {loaded || <div style={{ aspectRatio }} className="w-full rounded-8 bg-sub-white" />}
    </div>
  );
}

// region Loading
const loadingIconStyle = 'h-10 w-10 rounded-full bg-main-violet-base';
function Loading() {
  return (
    <div className={cn('flex h-full items-center justify-center gap-10')}>
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown1')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown2')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown3')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown4')} />
    </div>
  );
}
