import { StrictPropsWithChildren } from '@/types';
import MainHeader from './components/MainHeader';
import { Spacing } from '@/components/Spacing';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Spacing size={140} />
      <MainHeader />
      {children}
    </>
  );
}
