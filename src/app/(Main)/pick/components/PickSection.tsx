'use client';

import { BottomFixedButton } from '@/components/Button';
import Image from 'next/image';
import { useState } from 'react';

const countList = ['1인', '2인', '3인', '4인', '5인+'];

export default function PickSection() {
  const [countState, setCountState] = useState<string>('1인');

  return (
    <section className="flex flex-col">
      <div className="my-16 flex h-40 justify-evenly rounded-8 px-20">
        {countList.map((count) => (
          <CountItem
            key={count}
            onClick={() => setCountState(count)}
            isSelected={count === countState}
            count={count}
          />
        ))}
      </div>
      <div className="relative h-520 grow bg-black">
        <Image src="/images/sample.png" fill priority alt="image" />
      </div>
      <BottomFixedButton className="bg-main-violet text-white">포즈 pick!</BottomFixedButton>
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
      className={`flex grow cursor-pointer items-center justify-center first:rounded-l-8 last:rounded-r-8 ${
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