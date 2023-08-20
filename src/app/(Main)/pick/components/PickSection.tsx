'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';

import lottiePick from '#/lotties/pick.json';

const countList = ['1인', '2인', '3인', '4인', '5인+'];

export default function PickSection() {
  const [countState, setCountState] = useState<string>('1인');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>('');
  const { refetch } = usePosePickQuery(+countState[0], {
    onSuccess: (data) => {
      if (!data) return;
      setImage(data.poseInfo.imageKey);
    },
  });

  useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  const handlePickClick = () => {
    setIsLoading(true);
    refetch();
  };

  return (
    <section className="flex flex-col px-20">
      <div className="flex justify-evenly rounded-8 py-16">
        {countList.map((count) => (
          <CountItem
            key={count}
            onClick={() => !isLoading && setCountState(count)}
            isSelected={count === countState}
            count={count}
          />
        ))}
      </div>

      <Spacing size={13} />
      <div className="relative h-520">
        {isLoading ? (
          <Lottie loop animationData={lottiePick} play style={{ width: '100%', height: '100%' }} />
        ) : (
          <Image src={image || '/images/sample.png'} fill priority alt="sample" />
        )}
      </div>
      <BottomFixedButton className="bg-main-violet text-white" onClick={handlePickClick}>
        포즈 pick!
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
