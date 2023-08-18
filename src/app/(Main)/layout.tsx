import MainHeader from './components/MainHeader';
import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Spacing size={96} />
      <MainHeader />
      {children}
    </>
  );
}
