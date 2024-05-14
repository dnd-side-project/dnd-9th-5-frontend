'use client';

import Image from 'next/image';
import Link from 'next/link';
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

  return (
    <div className="relative mb-16 inline-block w-full rounded-8">
      {imageKey && (
        <>
          <Link href={`/detail/${id}`}>
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

          {loaded && <BookmarkButton isMarked={isMarked} poseId={id} />}
          {loaded || <div className="h-200 w-full rounded-8 bg-sub-white" />}
        </>
      )}
    </div>
  );
}
