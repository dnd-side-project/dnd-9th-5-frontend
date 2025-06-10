'use client';

import { delay } from 'es-toolkit';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { MainFooter } from '../MainFooter';
import { PrimaryButton } from '@/components/Button';
import PoseImage from '@/components/Modal/PoseImage';
import { SelectionBasic } from '@/components/Selection';
import { PEOPLE_COUNT_LIST } from '@/constants';
import { useDidMount } from '@/hooks';
import { getPosePick } from '@/server/api';

const DEFAULT_IMAGE = '/images/image-frame.png' as const;

export default function PickComponent() {
  const [countState, setCountState] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [isLottiePlaying, setIsLottiePlaying] = useState(true);
  const [imageSrc, setImageSrc] = useState<string>(DEFAULT_IMAGE);

  useDidMount(async () => {
    await delay(2200);
    setIsLottiePlaying(false);
  });

  const handlePickClick = async () => {
    setisLoading(true);
    setIsLottiePlaying(true);
    const imageUrl = (await getPosePick(countState)).data.imageUrl;
    setImageSrc(imageUrl);
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
        {(isLottiePlaying || isLoading) && (
          <div className="absolute inset-x-0 inset-y-0 z-10 flex justify-center bg-black">
            <Lottie animationData={lottiePick} play />
          </div>
        )}
        <div className="absolute inset-x-0 inset-y-0 bg-black">
          <PoseImage src={imageSrc} onLoad={() => setisLoading(false)} />
        </div>
      </div>
      <MainFooter>
        <PrimaryButton
          text={!!imageSrc ? `${countState}인 포즈 뽑기` : '인원수 선택하고 포즈 뽑기'}
          onClick={handlePickClick}
        />
      </MainFooter>
    </>
  );
}
