import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';

export default function SubLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Spacing size={60} />
      {children}
    </>
  );
}
