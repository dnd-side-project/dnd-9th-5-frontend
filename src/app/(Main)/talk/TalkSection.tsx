'use client';

import { useQueryClient } from '@tanstack/react-query';
import { delay } from 'es-toolkit';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import { usePoseTalkQuery } from '@/apis';
import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';
import useLoading from '@/hooks/useLoading';

const INITIAL_TALK_WORD = `제시어에 맞춰 포즈를 취해요!`;

export default function TalkSection() {
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
      <h1 className="items-center text-center h-100 max-w-310 break-keep">{talkWord}</h1>

      <Spacing size={10} />

      <div className="flex justify-center h-300">
        {isLoading && !isWordLoaded && <Lottie loop animationData={lottieTalkBeforeClick} play />}
        {isWordLoaded && isLoading && (
          <Lottie loop animationData={lottieTalkAfterClick} play speed={1.2} className="w-500" />
        )}
        {isWordLoaded && !isLoading && (
          <Lottie loop animationData={lottieTalkAfterClick} play speed={0} className="w-500" />
        )}
      </div>

      <BottomFixedDiv>
        <PrimaryButton onClick={handleTalkClick} text="제시어 뽑기" />
      </BottomFixedDiv>
    </section>
  );
}
