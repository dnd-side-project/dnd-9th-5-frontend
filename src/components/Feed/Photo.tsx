'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import BookmarkButton from './BookmarkButton';

interface Photo {
  imageKey?: string;
  source?: string;
  id: number;
  isMarked: boolean;
}

export default function Photo({ imageKey, source, id, isMarked }: Photo) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  return (
    <div className="relative mb-16 inline-block h-fit w-full rounded-8">
      {imageKey && (
        <>
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
            onClick={() => router.push(`/detail/${id}`)}
          />
          {loaded && <BookmarkButton isMarked={isMarked} poseId={id} />}
          {loaded || <div className="h-200 w-full rounded-8 bg-sub-white" />}
        </>
      )}
    </div>
  );
}
