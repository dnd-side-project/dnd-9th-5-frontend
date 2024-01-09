'use client';

import { Icon } from '@/components/Button';
import { BottomFixedDiv } from '@/components/Button/BottomFixedDiv';
import { Spacing } from '@/components/Spacing';

export default function MakerSection() {
  return (
    <BottomFixedDiv>
      <div>
        <div className="flex justify-center gap-16">
          <button onClick={() => window.open('https://www.instagram.com/posepicker')}>
            <Icon icon="instagram" size={48} />
          </button>
          <button
            onClick={() => window.open('https://github.com/dnd-side-project/dnd-9th-5-frontend')}
          >
            <Icon icon="github" size={48} />
          </button>
        </div>
        <Spacing size={8} />
        <div className="flex justify-center">
          <p className="text-12 text-caption">© POSEPICKER</p>
        </div>
        <Spacing size={15} />
      </div>
    </BottomFixedDiv>
  );
}
