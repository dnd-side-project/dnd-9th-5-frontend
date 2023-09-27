'use client';
import Image from 'next/image';

import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Icon } from '@/components/Icon';
import { Spacing } from '@/components/Spacing';

export default function MakerSection() {
  return (
    <BottomFixedDiv>
      <div className="flex justify-center">
        <Icon
          id="instagram"
          width={48}
          height={48}
          onClick={() => window.open('https://www.instagram.com/posepicker')}
          className="cursor-pointer"
        />
        <Spacing size={16} direction="horizontal" />
        <Icon
          id="github"
          width={48}
          height={48}
          onClick={() => window.open('https://github.com/dnd-side-project/dnd-9th-5-frontend')}
          className="cursor-pointer"
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
