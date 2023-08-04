import { StrictPropsWithChildren } from '@/types';
import { Spacing } from '@/components/Spacing';
import MainHeader from '../(Main)/components/MainHeader';

export default function SubLayout({ children }: StrictPropsWithChildren) {
  return (
    <div>
      <Spacing size={100} />
      <MainHeader />
      {children}
    </div>
  );
}
