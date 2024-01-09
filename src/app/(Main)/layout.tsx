import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <div className="flex h-full flex-col overflow-hidden px-20">
      <Spacing size={100} />
      {children}
    </div>
  );
}
