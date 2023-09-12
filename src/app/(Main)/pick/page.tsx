import { Metadata } from 'next';

import PickSection from './components/PickSection';
import { META_STRING } from '@/constants/meta';

export const metadata: Metadata = {
  title: '포즈픽',
  description: META_STRING.description.pick,
};

export default function Pick() {
  return <PickSection />;
}
