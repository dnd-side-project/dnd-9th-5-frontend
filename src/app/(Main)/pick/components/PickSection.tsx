'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { SelectionBasic } from '@/components/Selection';

import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';

import lottiePick from '#/lotties/pick.json';
import { peopleCountList } from '@/constants/filterList';

export default function PickSection() {
  const [countState, setCountState] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>('');
  const { refetch } = usePosePickQuery(countState, {
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
      <SelectionBasic data={peopleCountList} setState={setCountState} state={countState} />
      <Spacing size={13} />
      <Spacing size={16} />
      <div className="relative h-520">
        {isLoading ? (
          <Lottie loop animationData={lottiePick} play />
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
