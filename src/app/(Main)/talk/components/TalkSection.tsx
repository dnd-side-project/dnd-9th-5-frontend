'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import { usePoseTalkQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';
import useLoading from '@/hooks/useLoading';

export default function TalkSection() {
  const [talkWord, setTalkWord] = useState<string>(`제시어에 맞춰 포즈를 취해요!`);
  const { isLoading: isFirstLoading, stopLoading: stopFirstLoading } = useLoading({
    isFirstLoadingInfinite: true,
  });

  const { refetch } = usePoseTalkQuery({
    onSuccess: (data) => {
      setTimeout(() => {
        setTalkWord(data.poseWord.content);
      }, 1000);
    },
  });

  const { isLoading, startLoading } = useLoading({
    loadingDelay: 1000,
    initialState: false,
  });

  const handleTalkClick = () => {
    if (isFirstLoading) stopFirstLoading();
    startLoading();
    refetch();
  };

  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.resetQueries(['poseTalk']);
    };
  }, [queryClient]);

  return (
    <section className="flex flex-col items-center">
      <h1 className="h-100 max-w-310 items-center break-keep text-center">{talkWord}</h1>

      <Spacing size={10} />

      <div className="flex h-300 justify-center">
        {isFirstLoading && <Lottie loop animationData={lottieTalkBeforeClick} play />}
        {!isFirstLoading && isLoading && (
          <Lottie loop animationData={lottieTalkAfterClick} play speed={1.2} className="w-500" />
        )}
        {!isFirstLoading && !isLoading && (
          <Lottie loop animationData={lottieTalkAfterClick} play speed={0} className="w-500" />
        )}
      </div>

      <BottomFixedButton
        className="bg-main-violet text-white"
        onClick={handleTalkClick}
        disabled={isLoading}
      >
        제시어 뽑기
      </BottomFixedButton>
    </section>
  );
}
