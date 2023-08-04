import { StrictPropsWithChildren } from '@/types';
import MainHeader from './components/MainHeader';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
