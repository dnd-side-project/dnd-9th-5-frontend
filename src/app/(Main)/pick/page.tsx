import PickSection from './components/PickSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포즈픽',
  description: '시간 없을 땐 포즈픽으로 빠르게 랜덤 포즈를 추천받아보세요.',
};

export default function Pick() {
  return <PickSection />;
}
