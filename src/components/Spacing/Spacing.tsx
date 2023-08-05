import { HTMLAttributes, memo } from 'react';

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
      className={`flex-none ${className}`}
      style={{
        [direction === 'vertical' ? 'height' : 'width']: size + 'px',
      }}
      {...props}
    />
  );
});
