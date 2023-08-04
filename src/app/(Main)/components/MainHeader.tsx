import Image from 'next/image';
import Tab from './Tab';
import { Header } from '@/components/Header';

export default function MainHeader() {
  return (
    <div>
      <Header
        leftNode={<h4>PosePicker</h4>}
        rightNode={<Image src="/icons/menu.svg" width={24} height={24} alt="24" />}
      />
      <Tab />
    </div>
  );
}
