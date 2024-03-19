import { MainHeader } from '@/components/Header';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <div className="flex h-full flex-col overflow-hidden px-20 pt-100">
      <MainHeader />
      {children}
    </div>
  );
}
