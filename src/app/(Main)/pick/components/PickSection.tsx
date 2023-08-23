'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import lottiePick from '#/lotties/pick.json';

import { usePosePickQuery } from '@/apis';
import { BottomFixedButton } from '@/components/Button';
import { SelectionBasic } from '@/components/Selection';
import { Spacing } from '@/components/Spacing';

export const peopleCountList = [
  { text: '1인', value: 1 },
  { text: '2인', value: 2 },
  { text: '3인', value: 3 },
  { text: '4인', value: 4 },
  { text: '5인+', value: 5 },
];

export default function PickSection() {
  const [countState, setCountState] = useState<number>(1);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const { refetch, isFetched } = usePosePickQuery(countState, {
    onSuccess: (data) => {
      setImage(data.poseInfo.imageKey);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    },
  });

  useEffect(() => setIsFirstLoading(true), [countState]);

  const handlePickClick = () => {
    setIsFirstLoading(false);
    if (!isLoading) {
      setIsLoading(true);
      refetch();
    }
  };

  return (
    <section className="flex flex-col">
      <SelectionBasic data={peopleCountList} setState={setCountState} state={countState} />
      <Spacing size={13} />
      <Spacing size={16} />
      <div className="relative h-520">
        {isFirstLoading || isLoading || !isFetched ? (
          <Lottie loop animationData={lottiePick} play />
        ) : (
          <Image src={image} fill priority alt="이미지를 표시할 수 없습니다." />
        )}
      </div>
      <BottomFixedButton className="bg-main-violet text-white" onClick={handlePickClick}>
        포즈 pick!
      </BottomFixedButton>
    </section>
  );
}
