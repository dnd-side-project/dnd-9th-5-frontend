import type { StrictPropsWithChildren } from '@/types';

interface BottomFixedDivProps {
  className?: string;
}

export default function BottomFixedDiv({
  children,
  className,
}: StrictPropsWithChildren<BottomFixedDivProps>) {
  return (
    <div className={`fixed inset-x-0 bottom-0 mx-auto max-w-440 ${className}`}>
      <div className="px-20 pb-20">{children}</div>
    </div>
  );
}
