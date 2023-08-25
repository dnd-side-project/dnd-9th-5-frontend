'use client';

import { useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import lottieTalkAfterClick from '#/lotties/talk_after_click.json';
import lottieTalkBeforeClick from '#/lotties/talk_before_click.json';
import { usePoseTalkQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import useLoading from '@/hooks/useLoading';

export default function TalkSection() {
  const { isLoading: isFirstLoading, stopLoading: stopFirstLoading } = useLoading({
    loadingDelay: 1000,
    isFirstLoadingInfinite: true,
  });
  const ref = useRef(null);

  const { refetch, data } = usePoseTalkQuery();

  const { isLoading, startLoading } = useLoading({
    loadingDelay: 1000,
    onStopLoading: () => data && setTalkWord(data.poseWord.content),
    initialState: false,
  });
  const [talkWord, setTalkWord] = useState<string>(`제시어에 맞춰
  포즈를 취해요!`);

  const handleTalkClick = () => {
    if (isFirstLoading) stopFirstLoading();
    startLoading();
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
          ref={ref}
        />
      )}
      {isLoading && !isFirstLoading && (
        <Lottie
          loop
          animationData={lottieTalkAfterClick}
          play
          style={{ width: '120%', height: '100%' }}
        />
      )}
      {!isFirstLoading && !isLoading && (
        <Lottie
          loop
          animationData={lottieTalkAfterClick}
          play
          style={{ width: '120%', height: '100%' }}
          speed={0}
        />
      )}

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
