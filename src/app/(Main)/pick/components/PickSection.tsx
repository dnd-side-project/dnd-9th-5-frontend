'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { SelectionBasic } from '@/components/Selection';

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
    <section className="flex flex-col">
      <SelectionBasic data={countList} setState={setCountState} state={countState} />
      <Spacing size={13} />
      <Spacing size={16} />
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
