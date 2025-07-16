'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, useState } from 'react';

import BookmarkButton from './BookmarkButton';
import PrimaryButton from '../common/Button';
import { Loading } from '../Loading';
import { PoseDataI, PoseFeedResponseI } from '@/server/type';

// region Masonry
interface MasonryI extends PropsWithChildren {
  data: PoseFeedResponseI | null;
  loading: 'new' | 'more' | false;
  fetchMore(): void;
}

export default function Masonry({ children, data, loading, fetchMore }: MasonryI) {
  if (loading === 'new' || !data) {
    return <Loading className="h-[calc(100dvh-178px)]" />;
  }

  if (data.contents.length === 0) {
    return children;
  }

  return (
    <div>
      <div className="columns-2">
        {data.contents.map((content) => (
          <Photo key={content.id} data={content} />
        ))}
      </div>
      {loading === false && data.pagination.hasMore && (
        <PrimaryButton
          variant="secondary"
          onClick={fetchMore}
          text="더보기"
          className="mb-16 w-full"
        />
      )}
    </div>
  );
}

// region Photo
interface PhotoI {
  data: PoseDataI;
}
function Photo({ data }: PhotoI) {
  const { people, cut, tags, source, sourceUrl, image, id } = data;
  const aspectRatio = image.size ? image.size.width / image.size.height : 1;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mb-16 inline-block w-full rounded-8">
      <Link href={`/detail/${id}`}>
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
        />
      </Link>
      {loaded && <BookmarkButton isMarked={false} poseId={parseInt(id)} />}
      {loaded || <div style={{ aspectRatio }} className="w-full rounded-8 bg-sub-white" />}
    </div>
  );
}
