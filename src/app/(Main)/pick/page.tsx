import PickSection from './components/PickSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포즈픽',
};

export default function Pick() {
  return <PickSection />;
}
