import LoginSection from './components/LoginSection';
import MakerSection from './components/MakerSection';
import MenuListSection from './components/MenuListSection';
import { MenuHeader } from '@/components/Header';

export default function MenuPage() {
  return (
    <div className="px-20">
      <MenuHeader />
      <LoginSection />
      <MenuListSection />
      <MakerSection />
    </div>
  );
}
