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
          className="fixed inset-x-0 inset-y-0 z-modal flex items-center justify-center"
          onClick={() => setIsModalShow(false)}
        >
          <div className="fixed inset-x-0 inset-y-0 bg-dimmed opacity-70" />
          <div className="h-screen w-full">
            <Image
              src={src}
              alt="fullImage"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
      {responsive ? (
        <Image
          src={src}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          priority
          alt="상세보기"
          width={400}
          height={0}
          onLoad={onLoad}
          onClick={() => setIsModalShow(true)}
        />
      ) : (
        <Image
          src={src}
          width={400}
          height={0}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
          alt="포즈픽"
          onLoad={onLoad}
          onClick={() => setIsModalShow(true)}
        />
      )}
    </>
  );
}
