'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { Popup } from '@/components/Modal';
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
      if (!data) return;
      setImage(data.poseInfo.imageKey);
    },
  });

  const handlePickClick = () => {
    startLoading();
    refetch();
  };

  return (
    <section className="flex flex-col items-center">
      <Spacing size={16} />
      <div className="w-full">
        <SelectionBasic
          data={peopleCountList.slice(1)}
          state={countState}
          setState={setCountState}
        />
      </div>

      <Spacing size={16} />

      <div className="flex h-460 w-full items-center justify-center bg-black">
        <div className="relative flex h-460 w-300 items-center justify-center">
          {true && <Lottie loop animationData={lottiePick} play />}
          <Image
            src={image || '/images/image-frame.png'}
            fill
            alt="sample"
            priority
            loading="eager"
            className={clsx({ hidden: isLoading }, 'cursor-pointer')}
            onClick={() =>
              open(({ exit }) => (
                <Popup>
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
                </Popup>
              ))
            }
          />
        </div>
      </div>

      <BottomFixedButton
        className="bg-main-violet text-white"
        onClick={handlePickClick}
        disabled={isLoading}
      >
        {!!image ? '포즈 pick!' : '인원수 선택하고 포즈 pick!'}
      </BottomFixedButton>
    </section>
  );
}
