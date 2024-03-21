'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import BookmarkButton from './BookmarkButton';

interface Photo {
  imageKey?: string;
  source?: string;
  id?: number;
}

export default function Photo({ imageKey, source, id }: Photo) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link href={`detail/${id}`} scroll={false}>
      <div className="relative mb-16 inline-block h-fit w-full rounded-8">
        {imageKey && (
          <>
            <Image
              src={imageKey}
              alt={source || ''}
              layout="responsive"
              // placeholder="blur"
              // blurDataURL={IMAGE.profile_default}
              width={200}
              height={0}
              style={{
                objectFit: 'contain',
                borderRadius: 8,
              }}
              onLoad={() => setLoaded(true)}
            />
            {loaded && <BookmarkButton />}
          </>
        )}
      </div>
    </Link>
  );
}
