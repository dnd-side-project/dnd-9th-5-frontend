'use client';
import Image from 'next/image';
import { useEffect } from 'react';

import ModalWrapper from './ModalWrapper';
import { Spacing } from '../Spacing';

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <ModalWrapper onClose={onClose} className="w-full">
      <Spacing size={12} />
      <Image
        src={image}
        alt="fullImage"
        className="object-cover"
        width={500}
        height={500}
        onClick={onClose}
      />
    </ModalWrapper>
  );
}
