'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';

interface ModalWrapperProps {
  onClose?: () => void;
  className?: string;
}

export default function ModalWrapper({
  onClose = () => {},
  className,
  children,
}: StrictPropsWithChildren<ModalWrapperProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-modal fixed left-1/2 top-0 h-full w-full max-w-450 -translate-x-1/2 bg-[rgba(0,0,0,0.4)]"
    >
      <div
        ref={modalRef}
        className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', className)}
      >
        {children}
      </div>
    </motion.div>
  );
}
