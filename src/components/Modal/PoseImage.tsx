import Image from 'next/image';
import { useState } from 'react';

interface DetailedImageI {
  src: string;
  responsive?: boolean;
}
export default function PoseImage({ src, responsive = false }: DetailedImageI) {
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
          alt="이미지"
          layout="responsive"
          width={400}
          height={400}
          className="cursor-pointer object-contain"
          onClick={() => setIsModalShow(true)}
        />
      ) : (
        <Image
          src={src}
          fill
          priority
          className="cursor-pointer object-contain"
          alt="포즈픽"
          onClick={() => setIsModalShow(true)}
        />
      )}
    </>
  );
}
