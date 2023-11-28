import LoginSection from './components/LoginSection';
import MakerSection from './components/MakerSection';
import MenuListSection from './components/MenuListSection';
import SubHeader from '../../../components/Header/SubHeader';

export default function MenuPage() {
  return (
    <div className="px-20">
      <SubHeader title="메뉴" />
      <LoginSection />
      <MenuListSection />
      <MakerSection />
    </div>
  );
}
