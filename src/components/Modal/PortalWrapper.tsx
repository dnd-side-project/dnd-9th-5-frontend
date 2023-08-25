'use client';
import clsx from 'clsx';
import { useRef } from 'react';

import { AnimatedPortal } from '../Portal';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import type { StrictPropsWithChildren } from '@/types';

interface PortalWrapperProps {
  onClose?: () => void;
  isBackGroundBlur?: boolean;
  className?: string;
}

export default function PortalWrapper({
  onClose = () => {},
  children,
  isBackGroundBlur = true,
  className,
}: StrictPropsWithChildren<PortalWrapperProps>) {
  const portalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(portalRef, onClose);

  return (
    <AnimatedPortal
      motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
    >
      <div
        className={clsx(
          'fixed left-1/2 top-0 z-10 flex h-full w-full max-w-440 -translate-x-1/2 items-center justify-center',
          {
            'bg-neutral-900 bg-opacity-90': isBackGroundBlur,
          },
          className
        )}
      >
        {children}
      </div>
    </AnimatedPortal>
  );
}
