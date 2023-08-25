import clsx from 'clsx';

import type { StrictPropsWithChildren } from '@/types';

interface IconButtonProps {
  /**
   * 버튼의 크기를 설정합니다. small: 24px, medium: 40px, large: 48px (default: small)
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 버튼의 클릭 이벤트를 설정합니다.
   */
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
