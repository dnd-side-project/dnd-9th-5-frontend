import { Metadata } from 'next';

import PickSection from './components/PickSection';

export const metadata: Metadata = {
  title: '포즈픽',
};

export default function Pick() {
  return <PickSection />;
}
