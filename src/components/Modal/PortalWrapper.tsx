'use client';
import { useRef } from 'react';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';

interface ModalWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  isBackGroundBlur?: boolean;
  className?: string;
}

export default function ModalWrapper({
  onClose = () => {},
  children,
  isBackGroundBlur = true,
  className,
  ...props
}: StrictPropsWithChildren<ModalWrapperProps>) {
  const portalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(portalRef, onClose);

  return (
    <div
      className={cn(
        'fixed left-1/2 top-0 z-10 flex h-full w-full max-w-440 -translate-x-1/2 items-center justify-center',
        {
          'bg-neutral-900 bg-opacity-90': isBackGroundBlur,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
