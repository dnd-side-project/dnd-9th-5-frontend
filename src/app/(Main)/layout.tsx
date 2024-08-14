import { StrictPropsWithChildren } from '@/shared';
import { Header } from '@/widgets';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <div className="flex h-full flex-col px-20">
      <Header />
      {children}
    </div>
  );
}
