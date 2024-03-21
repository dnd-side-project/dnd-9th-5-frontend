import Image from 'next/image';
import { useState } from 'react';

interface DetailedImageI {
  src: string;
  responsive?: boolean;
  onLoad?: () => void;
}
export default function PoseImage({ src, responsive = false, onLoad }: DetailedImageI) {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <>
      {isModalShow && (
        <div
          className="fixed inset-x-0 inset-y-0 z-30 flex items-center justify-center"
          onClick={() => setIsModalShow(false)}
        >
          <div className="fixed inset-x-0 inset-y-0 bg-dimmed opacity-70" />
          <div className="h-screen w-full">
            <Image src={src} alt="fullImage" fill className="object-contain" />
          </div>
        </div>
      )}
      {responsive ? (
        <Image
          src={src}
          alt="상세보기"
          layout="responsive"
          width={400}
          height={400}
          onLoad={onLoad}
          className="cursor-pointer object-contain"
          onClick={() => setIsModalShow(true)}
        />
      ) : (
        <Image
          src={src}
          fill
          className="cursor-pointer object-contain"
          placeholder="blur"
          blurDataURL={src}
          alt="포즈픽"
          onLoad={onLoad}
          onClick={() => setIsModalShow(true)}
        />
      )}
    </>
  );
}
