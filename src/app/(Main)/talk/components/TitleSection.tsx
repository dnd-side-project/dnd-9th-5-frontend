'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { Spacing } from '@/components/Spacing';

export default function TitleSection() {
  const [tooltipOpened, setTooltipOpened] = useState<boolean>(false);
  console.log(tooltipOpened);

  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center">
        <h3 className="text-main-violet">뽑은 제시어</h3>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content={`제시어에 맞춰 포즈를 취해 보세요!\n독특한 나만의 포즈가 완성된답니다.`}
          data-tooltip-place="top"
          onMouseEnter={() => setTooltipOpened(true)}
          style={{ cursor: 'pointer' }}
        >
          <Image src="/icons/info.svg" width={24} height={24} alt="info" />
        </a>
      </div>
      <Tooltip id="my-tooltip" style={{ fontSize: '1rem', fontWeight: 400 }} />
      <Spacing size={8} />
    </section>
  );
}
