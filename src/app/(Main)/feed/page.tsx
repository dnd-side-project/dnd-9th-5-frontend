import { Metadata } from 'next';
import FeedSection from './FeedSection';

export const metadata: Metadata = {
  title: '포즈피드',
  description: '포즈피드에서 조건에 맞는 포즈를 찾고, 친구한테 공유해보세요',
};

export default function Feed() {
  return <FeedSection />;
}
