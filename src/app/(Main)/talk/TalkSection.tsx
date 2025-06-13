'use client';

import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import { MainFooter } from '../../../components/Layout/MainFooter';
import { Spacing } from '@/components/Spacing';
import { getPoseTalk } from '@/server/api';
import PrimaryButton from '@/components/common/Button';

const INITIAL_TALK_WORD = `제시어에 맞춰\n포즈를 취해요!`;

export default function TalkWordSection() {
  const [talkWord, setTalkWord] = useState(INITIAL_TALK_WORD);
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
