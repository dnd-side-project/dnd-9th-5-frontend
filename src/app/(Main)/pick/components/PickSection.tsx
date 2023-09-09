'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { SelectionBasic } from '@/components/Selection';
import { Spacing } from '@/components/Spacing';
import { peopleCountList } from '@/constants/filterList';
import useLoading from '@/hooks/useLoading';

export default function PickSection() {
  const [countState, setCountState] = useState<number>(1);
  const { open } = useOverlay();
  const { isLoading, startLoading } = useLoading({ loadingDelay: 1000 });
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
        <div className="absolute inset-0 flex justify-center bg-black">
          {isLoading && <Lottie loop animationData={lottiePick} play />}
          <Image
            src={image || '/images/image-frame.png'}
            fill
            priority
            className={clsx({ hidden: isLoading }, 'cursor-pointer object-contain')}
            onClick={() =>
              open(({ exit }) => (
                <Modal>
                  <Image
                    src={image || '/images/image-frame.png'}
                    alt="enlargementImage"
                    priority
                    loading="eager"
                    onClick={exit}
                    width={500}
                    height={440}
                    className="cursor-pointer"
                  />
                </Modal>
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
      >
        {!!image ? '포즈 pick!' : '인원수 선택하고 포즈 pick!'}
      </BottomFixedButton>
    </>
  );
}
