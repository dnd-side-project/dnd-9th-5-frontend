import { Spacing } from '@/components/Spacing';
import LoginSection from './components/LoginSection';
import MakerSection from './components/MakerSection';
import MenuHeader from './components/MenuListSection';
import MenuListSection from './components/MenuSection';

export default function MenuPage() {
  return (
    <div className="h-full px-20">
      <MenuHeader />
      <LoginSection />
      <MenuListSection />
      <MakerSection />
    </div>
  );
}
