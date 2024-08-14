import MainHeader from './MainHeader';
import { StrictPropsWithChildren } from '@/types';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <div className="flex flex-col h-full px-20">
      <MainHeader />
      {children}
    </div>
  );
}
