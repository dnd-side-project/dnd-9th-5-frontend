import type { StrictPropsWithChildren } from '@/types';

export default function BottomFixedDiv({ children }: StrictPropsWithChildren) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto max-w-440">
      <div className="px-20 pb-20">{children}</div>
    </div>
  );
}
