import MainHeader from './MainHeader';
import Tab from './Tab';

export default function Header() {
  return (
    <div className="border-b-divider border-b-2 px-20">
      <MainHeader />
      <Tab />
    </div>
  );
}
