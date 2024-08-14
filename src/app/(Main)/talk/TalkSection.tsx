'use client';

import { delay } from 'es-toolkit';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import { usePoseTalkQuery } from '@/shared';
import { Button } from '@/shared';
import { Spacing } from '@/shared';
import { Footer } from '@/widgets';

const INITIAL_TALK_WORD = `제시어에 맞춰 포즈를 취해요!`;

export default function TalkWordSection() {
  const [talkWord, setTalkWord] = useState(INITIAL_TALK_WORD);
  const [isLoading, setIsLoading] = useState(true);
  const isWordLoaded = talkWord !== INITIAL_TALK_WORD;

  const { refetch } = usePoseTalkQuery({
    onSuccess: async (data) => {
      await delay(1000);
      setTalkWord(data.poseWord.content);
      setIsLoading(false);
    },
  });

  const handleTalkClick = () => {
    setIsLoading(true);
    refetch();
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

      <Footer>
        <Button className="w-full" onClick={handleTalkClick} text="제시어 뽑기" />
      </Footer>
    </section>
  );
}
