'use client';
import Image from 'next/image';
import Link from 'next/link';

import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Spacing } from '@/components/Spacing';

export default function MakerSection() {
  return (
    <BottomFixedDiv>
      <div className="flex justify-center">
        <Image
          alt="instagram"
          src="/icons/instagram.svg"
          width={48}
          height={48}
          onClick={() => window.open('https://www.instagram.com/posepicker')}
        />
        <Spacing size={16} direction="horizontal" />
        <Image
          alt="github"
          src="/icons/github.svg"
          width={48}
          height={48}
          onClick={() => window.open('https://github.com/dnd-side-project/dnd-9th-5-frontend')}
        />
      </div>
      <Spacing size={8} />
      <div className="flex justify-center">
        <p className="text-12 text-caption">© POSEPICKER</p>
      </div>
      <Spacing size={60} />
    </BottomFixedDiv>
  );
}
