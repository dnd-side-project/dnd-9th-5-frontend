'use client';

import BottomFixedDiv from '@/components/BottomFixedDiv';
import { IconButton } from '@/components/Button/Icon';
import { Spacing } from '@/components/Spacing';

export default function MakerSection() {
  return (
    <BottomFixedDiv>
      <div className="flex justify-center">
        <IconButton
          icon="instagram"
          onClick={() => window.open('https://www.instagram.com/posepicker')}
        />
        <Spacing size={16} direction="horizontal" />
        <IconButton
          icon="github"
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
