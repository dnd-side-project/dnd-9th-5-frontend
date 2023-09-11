'use client';
import Image from 'next/image';
import Link from 'next/link';

import { PreparingModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { ICON } from '@/constants/icon';

interface Photo {
  imageKey?: string;
  source?: string;
  id?: number;
}

export default function Photo({ imageKey, source, id }: Photo) {
  const { open } = useOverlay();
  return (
    <Link href={`detail/${id}`} scroll={false}>
      <div className="relative mb-16 inline-block h-fit w-full rounded-8">
        {imageKey && (
          <>
            <img src={imageKey} alt={source || ''} className="rounded-8" />
            <div className="absolute bottom-6 right-6 h-36 w-36 rounded-24 bg-white bg-opacity-30 p-6">
              <Image
                src={ICON.bookmark.empty}
                width={24}
                height={24}
                alt="🔖"
                onClick={(e) => {
                  e.preventDefault();
                  open(({ exit }) => <PreparingModal onClose={exit} />);
                }}
              />
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
