import LoginSection from './components/LoginSection';
import MakerSection from './components/MakerSection';
import MenuHeader from './components/MenuHeader';
import MenuListSection from './components/MenuListSection';

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
