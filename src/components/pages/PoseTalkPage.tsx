'use client';

import { useState } from 'react';
import Lottie from 'react-lottie-player';
import { Tooltip } from 'react-tooltip';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import PrimaryButton, { Icon } from '../common/Button';
import { MainFooter } from '../Layout/MainFooter';
import { Spacing } from '../Spacing';
import { COOKIE_IS_TOOLTIP_OPEN, ICON } from '@/constants';
import { getPoseTalk } from '@/server/api';
import { setClientCookie } from '@/utils';

// region Main Component
interface Props {
  isTooltipOpen: boolean;
}
export default function PoseTalkPage({ isTooltipOpen }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <TalkTitleSection isInitialToolTipOpen={isTooltipOpen} />
      <TalkWordSection />
    </div>
  );
}

// region Tooltip
interface TalkTooltipI {
  isOpen: boolean;
  onToolTipClick: () => void;
}

function TalkToolTip({ onToolTipClick, isOpen }: TalkTooltipI) {
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
      isOpen={isOpen}
    />
  );
}

// region TitleSection
interface TalkTitleSectionI {
  isInitialToolTipOpen: boolean;
}

function TalkTitleSection({ isInitialToolTipOpen }: TalkTitleSectionI) {
  const [isOpen, setIsOpen] = useState(isInitialToolTipOpen);

  const handleToolTopClick = () => {
    setClientCookie(COOKIE_IS_TOOLTIP_OPEN, 'false');
    setIsOpen(false);
  };

  const handleToolTopInfoClick = () => {
    if (isOpen) {
      setClientCookie(COOKIE_IS_TOOLTIP_OPEN, 'false');
      setIsOpen(false);
    } else {
      setClientCookie(COOKIE_IS_TOOLTIP_OPEN, 'true');
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

// region WordSection
const INITIAL_TALK_WORD = `제시어에 맞춰\n포즈를 취해요!` as const;

function TalkWordSection() {
  const [talkWord, setTalkWord] = useState<string>(INITIAL_TALK_WORD);
  const [isLoading, setIsLoading] = useState(true);
  const isWordLoaded = talkWord !== INITIAL_TALK_WORD;

  const handleTalkClick = async () => {
    setIsLoading(true);
    const keyword = (await getPoseTalk()).data.keyword;
    setTalkWord(keyword);
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="h-100 max-w-310 items-center break-keep text-center">{talkWord}</h1>

      <Spacing size={10} />

      <div className="flex h-300 justify-center">
        {!isWordLoaded && isLoading && <Lottie loop animationData={lottieTalkBeforeClick} play />}
        {isWordLoaded && isLoading && (
          <Lottie loop animationData={lottieTalkAfterClick} play speed={1.2} className="w-500" />
        )}
        {isWordLoaded && !isLoading && (
          <Lottie loop animationData={lottieTalkAfterClick} play speed={0} className="w-500" />
        )}
      </div>

      <MainFooter>
        <PrimaryButton className="w-full" onClick={handleTalkClick} text="제시어 뽑기" />
      </MainFooter>
    </section>
  );
}
