import { Spacing } from '@/components/Spacing';
import { StrictPropsWithChildren } from '@/types';
import MainHeader from './components/MainHeader';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Spacing size={104} />
      <MainHeader />
      <div className="px-20 py-16">{children}</div>
    </>
  );
}
