import Link from 'next/link';

import BookmarkButton from './BookmarkButton';

interface Photo {
  imageKey?: string;
  source?: string;
  id?: number;
}

export default function Photo({ imageKey, source, id }: Photo) {
  return (
    <Link href={`detail/${id}`} scroll={false}>
      <div className="relative mb-16 inline-block h-fit w-full rounded-8">
        {imageKey && (
          <>
            <img src={imageKey} alt={source || ''} className="rounded-8" />
            <BookmarkButton />
          </>
        )}
      </div>
    </Link>
  );
}
