import Image from 'next/image';

import ModalWrapper from './ModalWrapper';

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <ModalWrapper onClose={onClose} className="w-full">
      <div className="h-screen w-screen">
        <Image src={image} alt="fullImage" fill className="object-contain" onClick={onClose} />
      </div>
    </ModalWrapper>
  );
}
