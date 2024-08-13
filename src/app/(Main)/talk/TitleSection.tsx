'use client';
import { useState } from 'react';

import TalkToolTip from './TalkToolTip';
import { Icon } from '@/components/Button/Icon';
import { Spacing } from '@/components/Spacing';
import { ICON, IS_TOOLTIP_OPEN } from '@/constants';
import { setClientCookie } from '@/utils';

interface TitleSectionProps {
  isInitialToolTipOpen: boolean;
}

export default function TalkTitleSection({ isInitialToolTipOpen }: TitleSectionProps) {
  const [isOpen, setIsOpen] = useState(isInitialToolTipOpen);

  const handleToolTopClick = () => {
    setClientCookie(IS_TOOLTIP_OPEN, 'false');
    setIsOpen(false);
  };

  const handleToolTopInfoClick = () => {
    if (isOpen) {
      setClientCookie(IS_TOOLTIP_OPEN, 'false');
      setIsOpen(false);
    } else {
      setClientCookie(IS_TOOLTIP_OPEN, 'true');
      setIsOpen(true);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex items-center">
        <h3 className="text-main-violet">뽑은 제시어</h3>
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-place="top"
          style={{ cursor: 'pointer' }}
          onClick={handleToolTopInfoClick}
        >
          <Icon icon={ICON.info} />
        </a>
      </div>
      <TalkToolTip isOpen={isOpen} onToolTipClick={handleToolTopClick} />
      <Spacing size={8} />
    </section>
  );
}
