'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import { usePoseTalkQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';

export default function TalkSection() {
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [talkWord, setTalkWord] = useState<string>('포즈로 말해요');
  const { refetch } = usePoseTalkQuery({
    onSuccess: (data) => {
      setIsFirstLoading(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setTalkWord(data.poseWord.content);
      }, 3000);
    },
  });

  const handleTalkClick = () => {
    refetch();
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-center">{talkWord}</h1>
      {isFirstLoading && (
        <Lottie
          loop
          animationData={lottieTalkBeforeClick}
          play
          style={{ width: '100%', height: '100%' }}
        />
      )}
      {isLoading && (
        <Lottie
          loop
          animationData={lottieTalkAfterClick}
          play
          style={{ width: '100%', height: '100%' }}
        />
      )}
      {!isFirstLoading && !isLoading && (
        <Image src="/lotties/talk_after_loading.png" width={360} height={10} alt="lottie" />
      )}
      <BottomFixedButton className="bg-main-violet text-white" onClick={handleTalkClick}>
        제시어 뽑기
      </BottomFixedButton>
    </section>
  );
}
