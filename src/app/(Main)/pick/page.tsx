'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import PoseImage from '@/components/Modal/PoseImage';
import { SelectionBasic } from '@/components/Selection';
import { peopleCountList } from '@/constants/data';

const DEFAULT_IMAGE = '/images/image-frame.png';

export default function Page() {
  const [countState, setCountState] = useState(1);
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);
  const [isRendered, setIsRendered] = useState(false);
  const [isLottie, setIsLottie] = useState(true);
  const { refetch } = usePosePickQuery(countState, {
    onSuccess: (data) => {
      if (data.poseInfo.imageKey === image) {
        setIsRendered(true);
      }
      setImage(data.poseInfo.imageKey);
    },
  });

  useEffect(() => {
    setImage(DEFAULT_IMAGE);
    setIsRendered(true);
  }, [countState]);

  useEffect(() => {
    setTimeout(() => setIsLottie(false), 2200);
  }, []);

  const handlePickClick = () => {
    setIsRendered(false);
    refetch();
    setIsLottie(true);
    setTimeout(() => setIsLottie(false), 900);
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
        {(isLottie || !isRendered) && (
          <div className="absolute inset-x-0 inset-y-0 z-10 flex justify-center bg-black">
            <Lottie animationData={lottiePick} play />
          </div>
        )}
        <div className="absolute inset-x-0 inset-y-0 bg-black">
          <PoseImage src={image} onLoad={() => setIsRendered(true)} />
        </div>
      </div>
      <BottomFixedDiv>
        <PrimaryButton
          text={!!image ? `${countState}인 포즈 뽑기` : '인원수 선택하고 포즈 뽑기'}
          onClick={handlePickClick}
        />
      </BottomFixedDiv>
    </>
  );
}
