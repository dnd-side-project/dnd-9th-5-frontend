'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { SelectionBasic } from '@/components/Selection';
import { Spacing } from '@/components/Spacing';
import { peopleCountList } from '@/constants/filterList';
import useLoading from '@/hooks/useLoading';

export default function PickSection() {
  const [countState, setCountState] = useState<number>(1);
  const { isLoading, startLoading } = useLoading({ loadingDelay: 1000 });
  const [image, setImage] = useState<string>('');
  const { refetch } = usePosePickQuery(+0, {
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
    <section className="flex flex-col">
      <div className="flex justify-evenly rounded-8 py-16">
        <SelectionBasic
          data={peopleCountList.slice(1)}
          state={countState}
          setState={setCountState}
        />
      </div>

      <Spacing size={13} />

      <div className="relative flex h-520 w-full justify-center bg-slate-500">
        {true && (
          <Lottie loop animationData={lottiePick} play style={{ width: '100%', height: '100%' }} />
        )}
        <Image
          src={image || '/images/image-frame.png'}
          fill
          alt="sample"
          priority
          loading="eager"
          className={isLoading ? 'hidden' : ''}
        />
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

interface CountItemProps {
  isSelected: boolean;
  count: string;
  onClick: () => void;
}

function CountItem({ isSelected, count, onClick }: CountItemProps) {
  return (
    <div
      className={`flex h-40 grow cursor-pointer items-center justify-center first:rounded-l-8 last:rounded-r-8 ${
        isSelected
          ? 'border-1 border-main-violet bg-main-violet-bright'
          : 'border-default border-1 bg-sub-white'
      }`}
      onClick={onClick}
    >
      <h6 className={isSelected ? 'text-main-violet-dark' : ''}>{count}</h6>
    </div>
  );
}
