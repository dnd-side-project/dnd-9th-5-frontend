'use client';
import clsx from 'clsx';
import { useRef } from 'react';

import { AnimatedPortal } from '../Portal';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import type { StrictPropsWithChildren } from '@/types';

interface PortalWrapperProps {
  onClose?: () => void;
  isBackGroundBlur?: boolean;
}

export default function PortalWrapper({
  onClose = () => {},
  children,
  isBackGroundBlur = true,
}: StrictPropsWithChildren<PortalWrapperProps>) {
  const portalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(portalRef, onClose);

  return (
    <AnimatedPortal
      motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
    >
      <div
        className={clsx('fixed left-1/2 top-0 z-10 h-full w-full max-w-440 -translate-x-1/2', {
          'bg-neutral-900 bg-opacity-90': isBackGroundBlur,
        })}
      >
        <div
          ref={portalRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          {children}
        </div>
      </div>
    </AnimatedPortal>
  );
}
