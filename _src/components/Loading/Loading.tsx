'use client';
import cn from '@/utils/cn';

interface LoadingProps {
  className?: string;
}

const loadingIconStyle = 'h-10 w-10 rounded-full bg-main-violet-base';

export default function Loading({ className }: LoadingProps) {
  return (
    <div className={cn('flex h-full items-center justify-center gap-10', className)}>
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown1')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown2')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown3')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown4')} />
    </div>
  );
}
