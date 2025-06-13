import MenuListSection from './MenuListSection';
import Header from '@/components/Layout/Header';
import LoginSection from '@/components/Login/LoginSection';

export default async function MenuPage() {
  return (
    <div className="px-20">
      <Header close title="메뉴" />
      <LoginSection />
      <MenuListSection />
    </div>
  );
}
