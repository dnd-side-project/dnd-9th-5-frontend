import MenuListSection from './MenuListSection';
import Header from '@/components/Header';
import LoginSection from '@/components/Login/LoginSection';

export default function MenuPage() {
  return (
    <div className="px-20">
      <Header close={true} title="메뉴" />
      <LoginSection />
      <MenuListSection />
    </div>
  );
}
