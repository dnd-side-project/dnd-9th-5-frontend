import MenuListSection from './components/MenuListSection';
import LoginSection from '@/app/(Main)/mypose/components/LoginSection';
import { MenuHeader } from '@/components/Header';

export default function MenuPage() {
  return (
    <div className="px-20">
      <MenuHeader />
      <LoginSection />
      <MenuListSection />
    </div>
  );
}
