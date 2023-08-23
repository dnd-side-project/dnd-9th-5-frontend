'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lottie from 'react-lottie-player';

import lottiePick from '#/lotties/pick.json';
import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';
import useLoading from '@/hooks/useLoading';

const countList = ['1인', '2인', '3인', '4인', '5인+'];

export default function PickSection() {
  const [countState, setCountState] = useState<string>('1인');
  const { isLoading, startLoading } = useLoading({ loadingDelay: 3000 });
  const [image, setImage] = useState<string>('');
  const { refetch } = usePosePickQuery(+countState[0], {
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
    <section className="flex flex-col px-20">
      <div className="flex justify-evenly rounded-8 py-16">
        {countList.map((count) => (
          <CountItem
            key={count}
            onClick={() => setCountState(count)}
            isSelected={count === countState}
            count={count}
          />
        ))}
      </div>

      <Spacing size={13} />

      <div className="relative h-520">
        {true && (
          <Lottie loop animationData={lottiePick} play style={{ width: '100%', height: '100%' }} />
        )}
        <Image
          src={image || '/images/sample.png'}
          fill
          alt="sample"
          priority
          loading="eager"
          className={isLoading ? 'hidden' : ''}
        />
      </div>

      <BottomFixedButton className="bg-main-violet text-white" onClick={handlePickClick}>
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
          : 'border-1 border-default bg-sub-white'
      }`}
      onClick={onClick}
    >
      <h6 className={isSelected ? 'text-main-violet-dark' : ''}>{count}</h6>
    </div>
  );
}
