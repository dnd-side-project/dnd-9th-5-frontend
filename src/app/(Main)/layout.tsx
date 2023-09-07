import { Spacing } from '@/components/Spacing';
import MainHeader from './components/MainHeader';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <MainHeader />
      <div className="flex h-screen flex-col overflow-hidden px-20">
        <Spacing size={100} />
        {children}
      </div>
    </>
  );
}
