import { HTMLAttributes, memo } from 'react';

import cn from '@/utils/cn';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  size: number;
}

export default memo(function Spacing({
  size,
  direction = 'vertical',
  className,
  ...props
}: SpacingProps) {
  return (
    <div
      className={cn('flex-none', className)}
      style={{
        [direction === 'vertical' ? 'height' : 'width']: size + 'px',
      }}
      {...props}
    />
  );
});
