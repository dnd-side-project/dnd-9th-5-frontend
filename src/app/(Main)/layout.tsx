import MainHeader from './components/MainHeader';
import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Spacing size={80} />
      <MainHeader />
      <div className="px-20 py-16">{children}</div>
    </>
  );
}
