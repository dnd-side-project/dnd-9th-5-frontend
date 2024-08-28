'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import BookmarkButton from './BookmarkButton';
import { PoseInfo } from '@/apis';

interface PhotoI {
  data: PoseInfo;
}
export default function Photo({ data }: PhotoI) {
  const { imageKey, source, bookmarkCheck, poseId, width, height } = data;
  const [loaded, setLoaded] = useState(false);
  console.log(width / height);

  return (
    <div className="relative mb-16 inline-block w-full rounded-8">
      {imageKey && (
        <>
          <Link href={`/detail/${poseId}`}>
            <Image
              src={imageKey}
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

          {loaded && <BookmarkButton isMarked={bookmarkCheck} poseId={poseId} />}
          {loaded || (
            <div
              style={{ aspectRatio: `${width}/${height}` }}
              className="w-full rounded-8 bg-sub-white"
            />
          )}
        </>
      )}
    </div>
  );
}
