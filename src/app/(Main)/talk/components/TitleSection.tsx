'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { Spacing } from '@/components/Spacing';

export default function TitleSection() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center">
        <h3 className="text-main-violet">뽑은 제시어</h3>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          style={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src="/icons/info.svg" width={24} height={24} alt="info" />
        </a>
      </div>
      <Tooltip
        id="my-tooltip"
        style={{ fontSize: '1rem', fontWeight: 400 }}
        closeOnEsc
        openOnClick
        isOpen={isOpen}
        render={() => (
          <div className="flex ">
            <div>
              <p>제시어에 맞춰 포즈를 취해 보세요!</p>
              <p>독특한 나만의 포즈가 완성된답니다.</p>
            </div>
            <Spacing size={8} direction="horizontal" />
            <Image
              src="/icons/close_white.svg"
              width={20}
              height={20}
              alt="close"
              className="mb-auto"
            />
          </div>
        )}
        clickable
      />
      <Spacing size={8} />
    </section>
  );
}
