import MenuListSection from './MenuListSection';
import Header, { CloseButton } from '@/components/Layout/Header';
import LoginSection from '@/components/Login/LoginSection';

export default async function MenuPage() {
  return (
    <div className="px-20">
      <Header title="메뉴" left={<CloseButton />} />
      <LoginSection />
      <MenuListSection />
    </div>
  );
}
