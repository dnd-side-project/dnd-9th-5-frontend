'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { ImageModal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { SelectionBasic } from '@/components/Selection';
import { Spacing } from '@/components/Spacing';
import { peopleCountList } from '@/constants/filterList';
import useLoading from '@/hooks/useLoading';

export default function PickSection() {
  const [countState, setCountState] = useState(1);
  const { open } = useOverlay();
  const { isLoading, startLoading } = useLoading({ loadingDelay: 1000 });
  const [isButtonAcitve, setIsButtonActive] = useState(false);
  const [image, setImage] = useState<string>('');
  const { refetch } = usePosePickQuery(countState, {
    onSuccess: (data) => {
      setImage(data.poseInfo.imageKey);
    },
  });

  const handlePickClick = () => {
    startLoading();
    refetch();
  };

  const handleChangeState = () => {
    setIsButtonActive(true);
    const a = setTimeout(() => {
      setIsButtonActive(false);
    }, 1000);
    return () => clearTimeout(a);
  };

  return (
    <>
      <div className="py-16">
        <SelectionBasic
          data={peopleCountList.slice(1)}
          state={countState}
          setState={setCountState}
          onChangeState={handleChangeState}
        />
      </div>
      <div className="relative flex flex-1">
        <div className="absolute inset-0 flex justify-center bg-black">
          {isLoading && <Lottie loop animationData={lottiePick} play />}
          <Image
            src={image || '/images/image-frame.png'}
            fill
            priority
            className={clsx({ hidden: isLoading }, 'cursor-pointer object-contain')}
            onClick={() =>
              open(({ exit }) => (
                <ImageModal image={image || '/images/image-frame.png'} onClose={exit} />
              ))
            }
            alt="이미지"
          />
        </div>
      </div>
      <Spacing size={100} />
      <BottomFixedButton
        className="bg-main-violet text-white"
        onClick={handlePickClick}
        disabled={isLoading}
        isActive={isButtonAcitve}
      >
        {!!image ? `${countState}인 포즈 뽑기` : '인원수 선택하고 포즈 뽑기'}
      </BottomFixedButton>
    </>
  );
}
