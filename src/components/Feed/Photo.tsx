'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import BookmarkButton from './BookmarkButton';
import { PoseDetailResponseI } from '@/server/type';

interface PhotoI {
  data: PoseDetailResponseI;
}
export default function Photo({ data }: PhotoI) {
  const { people, cut, tags, source, sourceUrl, image, id } = data;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mb-16 inline-block w-full rounded-8">
      {image && (
        <>
          <Link href={`/detail/${id}`}>
            <Image
              src={image}
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
          {loaded || (
            <div
              // style={{ aspectRatio: `${width}/${height}` }}
              className="w-full rounded-8 bg-sub-white"
            />
          )}
        </>
      )}
    </div>
  );
}
