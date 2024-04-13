import MainHeader from '@/components/Header/MainHeader';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <div className="px-20">
      <MainHeader />
      {children}
    </div>
  );
}
