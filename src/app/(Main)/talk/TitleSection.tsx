'use client';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import TalkToolTip from './TalkToolTip';
import { Icon } from '@/components/Button/Icon';
import { Spacing } from '@/components/Spacing';
import { ICON } from '@/constants/icon';
import useDidMount from '@/hooks/useDidMount';

export default function TitleSection() {
  const [isOpen, setIsOpen] = useState(true);

  useDidMount(() => {
    if (localStorage.getItem('tooltipIsOpen') === 'false') setIsOpen(false);
  });

  const handleToolTopClick = () => {
    localStorage.setItem('tooltipIsOpen', 'false');
    setIsOpen(false);
  };

  const handleToolTopInfoClick = () => {
    if (isOpen) {
      localStorage.setItem('tooltipIsOpen', 'false');
      setIsOpen(false);
    } else {
      localStorage.setItem('tooltipIsOpen', 'true');
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
