'use client';
import { useRef } from 'react';

import { AnimatedPortal } from '../Portal';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import type { StrictPropsWithChildren } from '@/types';

interface ModalWrapperProps {
  onClose?: () => void;
}

export default function ModalWrapper({
  onClose = () => {},
  children,
}: StrictPropsWithChildren<ModalWrapperProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <AnimatedPortal
      motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
    >
      <div className="fixed left-1/2 top-0 z-10 h-full w-full max-w-440 -translate-x-1/2 bg-neutral-900 bg-opacity-90">
        <div
          ref={modalRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          {children}
        </div>
      </div>
    </AnimatedPortal>
  );
}
