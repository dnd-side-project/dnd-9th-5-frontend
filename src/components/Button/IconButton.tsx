import clsx from 'clsx';

import type { StrictPropsWithChildren } from '@/types';

interface IconButtonProps {
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}
export default function IconButton({
  onClick,
  children,
  size = 'small',
}: StrictPropsWithChildren<IconButtonProps>) {
  return (
    <button
      className={clsx('flex items-center justify-center', {
        'h-24 w-24': size === 'small',
        'h-40 w-40': size === 'medium',
        'h-48 w-48': size === 'large',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
