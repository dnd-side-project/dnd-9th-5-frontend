'use client';

import { BottomFixedButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';
import { useState } from 'react';
import lottieJson from '../../../../../public/lotties/posepicker.json';
import Lottie from 'react-lottie-player';

const countList = ['1인', '2인', '3인', '4인', '5인+'];

export default function PickSection() {
  const [countState, setCountState] = useState<string>('1인');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePickClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
        {isLoading ? (
          <Lottie loop animationData={lottieJson} play style={{ width: '100%', height: '100%' }} />
        ) : (
          <Image src="/images/sample.png" fill priority alt="image" />
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