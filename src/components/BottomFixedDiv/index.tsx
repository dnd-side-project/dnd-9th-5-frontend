import type { StrictPropsWithChildren } from '@/types';

interface BottomFixedDivProps {
  className?: string;
}

export default function BottomFixedDiv({
  children,
  className,
}: StrictPropsWithChildren<BottomFixedDivProps>) {
  return (
    <div className={`fixed inset-x-0 bottom-20 mx-auto max-w-440 px-20 bg-white ${className}`}>
      {children}
    </div>
  );
}
