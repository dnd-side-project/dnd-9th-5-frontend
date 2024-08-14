import { ComponentProps } from 'react';
import { Tooltip } from 'react-tooltip';

import { Icon } from '@/components/Button';
import { Spacing } from '@/components/Spacing';

interface TalkToolTipProps extends ComponentProps<typeof Tooltip> {
  onToolTipClick: () => void;
}

export default function TalkToolTip({ onToolTipClick, ...props }: TalkToolTipProps) {
  return (
    <Tooltip
      id="my-tooltip"
      style={{ fontSize: '1rem', fontWeight: 400 }}
      openOnClick
      className="z-tooltip"
      clickable
      render={() => (
        <div className="flex cursor-pointer" onClick={onToolTipClick}>
          <div>
            <p>{`일명 <포즈로 말해요> 챌린지!`}</p>
            <p>제시어에 맞춰 포즈를 취해보세요.</p>
          </div>
          <Spacing size={8} direction="horizontal" />
          <Icon size={20} icon="close_white" />
        </div>
      )}
      {...props}
    />
  );
}
