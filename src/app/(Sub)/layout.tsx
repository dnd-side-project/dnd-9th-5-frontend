import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';

export default function SubLayout({ children }: StrictPropsWithChildren) {
  return (
    <div>
      <Spacing size={100} />
      {children}
    </div>
  );
}
