'use client';

import { BottomFixedButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';
import { useState } from 'react';
import lottieJson from '../../../../../public/lotties/posepicker.json';
import Lottie from 'react-lottie-player';
import { SelectionBasic } from '@/components/Selection';

const countList = ['1인', '2인', '3인', '4인', '5인+'];

export default function PickSection() {
  const [countState, setCountState] = useState<string>('1인');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePickClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col px-20">
      <div className="py-16">
        <SelectionBasic data={countList} state={countState} setState={setCountState} />
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
