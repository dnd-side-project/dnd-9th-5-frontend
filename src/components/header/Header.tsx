import MainHeader from './MainHeader';
import Tab from './Tab';

export default function Header() {
  return (
    <div className="border-b-divider fixed inset-x-0 border-b-2 bg-white px-20 pt-16">
      <MainHeader />
      <Tab />
    </div>
  );
}
