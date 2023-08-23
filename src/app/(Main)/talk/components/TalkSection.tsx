'use client';

import { useState } from 'react';
import Lottie from 'react-lottie-player';

import { usePoseTalkQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';

export default function TalkSection() {
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [talkWord, setTalkWord] = useState<string>('제시어에 맞춰 포즈를 취해요!');
  const { refetch } = usePoseTalkQuery({
    onSuccess: (data) => {
      setTimeout(() => {
        setIsLoading(false);
        setTalkWord(data.poseWord.content);
      }, 1000);
    },
  });

  const handleTalkClick = () => {
    setIsFirstLoading(false);
    if (!isLoading) {
      setIsLoading(true);
      refetch();
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="max-w-310 break-keep text-center">{talkWord}</h1>
      {isFirstLoading ? (
        <Lottie
          loop
          animationData={lottieTalkBeforeClick}
          play
          style={{ width: '100%', height: '100%' }}
        />
      ) : isLoading ? (
        <Lottie
          animationData={lottieTalkAfterClick}
          play
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <img src="/lotties/talk_after_loading.png" alt="" />
      )}
      <BottomFixedButton className="bg-main-violet text-white" onClick={handleTalkClick}>
        제시어 뽑기
      </BottomFixedButton>
    </section>
  );
}
