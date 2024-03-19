'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import { ImageModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { SelectionBasic } from '@/components/Selection';
import { Spacing } from '@/components/Spacing';
import { peopleCountList } from '@/constants/data';

export default function PickSection() {
  const [countState, setCountState] = useState(1);
  const { open } = useOverlay();
  const [image, setImage] = useState<string>('/images/image-frame.png');
  const [isLottie, setIsLottie] = useState(true);
  const { refetch } = usePosePickQuery(countState, {
    onSuccess: (data) => {
      setImage(data.poseInfo.imageKey);
    },
  });

  useEffect(() => {
    setTimeout(() => setIsLottie(false), 2200);
  }, []);

  const handlePickClick = () => {
    refetch();
    setIsLottie(true);
    setTimeout(() => setIsLottie(false), 800);
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
      <div className="relative flex flex-1">
        {isLottie && (
          <div className="absolute inset-0 z-10 flex justify-center bg-black">
            <Lottie animationData={lottiePick} play />
          </div>
        )}
        <div className="absolute inset-0 flex justify-center bg-black">
          <Image
            src={image}
            fill
            priority
            className="cursor-pointer object-contain"
            onClick={() => open(({ exit }) => <ImageModal image={image} onClose={exit} />)}
            alt="포즈픽"
          />
        </div>
      </div>
      <Spacing size={100} />
      <BottomFixedDiv>
        <PrimaryButton
          text={!!image ? `${countState}인 포즈 뽑기` : '인원수 선택하고 포즈 뽑기'}
          onClick={handlePickClick}
        />
      </BottomFixedDiv>
    </>
  );
}
