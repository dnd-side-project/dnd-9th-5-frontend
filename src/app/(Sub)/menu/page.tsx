import MenuListSection from './components/MenuListSection';
import { MenuHeader } from '@/components/Header';

export default function MenuPage() {
  return (
    <div className="px-20">
      <MenuHeader />
      <MenuListSection />
    </div>
  );
}
