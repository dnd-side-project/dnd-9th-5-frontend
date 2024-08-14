'use client';

import { delay } from 'es-toolkit';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { PoseImage, usePosePickQuery } from '@/shared';
import { Button } from '@/shared';
import { SelectionBasic } from '@/shared';
import { PEOPLE_COUNT_LIST } from '@/shared';
import { useDidMount } from '@/shared';
import { Footer } from '@/widgets';

const DEFAULT_IMAGE = '/images/image-frame.png';

export default function PickComponent() {
  const [countState, setCountState] = useState(1);
  const [isLottiePlaying, setIsLottiePlaying] = useState(true);
  const { refetch, data } = usePosePickQuery(countState);
  const imageSrc = data?.poseInfo?.imageKey || DEFAULT_IMAGE;

  useDidMount(async () => {
    await delay(2200);
    setIsLottiePlaying(false);
  });

  const handlePickClick = async () => {
    refetch();
    setIsLottiePlaying(true);
    await delay(900);
    setIsLottiePlaying(false);
  };

  return (
    <>
      <div className="py-16">
        <SelectionBasic
          data={PEOPLE_COUNT_LIST.slice(1)}
          state={countState}
          setState={setCountState}
        />
      </div>
      <div className="relative flex grow">
        {isLottiePlaying && (
          <div className="absolute inset-x-0 inset-y-0 z-10 flex justify-center bg-black">
            <Lottie animationData={lottiePick} play />
          </div>
        )}
        <div className="absolute inset-x-0 inset-y-0 bg-black">
          <PoseImage src={imageSrc} />
        </div>
      </div>
      <Footer>
        <Button
          text={!!imageSrc ? `${countState}인 포즈 뽑기` : '인원수 선택하고 포즈 뽑기'}
          onClick={handlePickClick}
        />
      </Footer>
    </>
  );
}
