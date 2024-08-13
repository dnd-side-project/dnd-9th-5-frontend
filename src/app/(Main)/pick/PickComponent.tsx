'use client';

import { delay } from 'es-toolkit';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import PoseImage from '@/components/Modal/PoseImage';
import { SelectionBasic } from '@/components/Selection';
import { peopleCountList } from '@/constants';
import { useDidMount } from '@/hooks';

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
          data={peopleCountList.slice(1)}
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
      <BottomFixedDiv>
        <PrimaryButton
          text={!!imageSrc ? `${countState}인 포즈 뽑기` : '인원수 선택하고 포즈 뽑기'}
          onClick={handlePickClick}
        />
      </BottomFixedDiv>
    </>
  );
}
