import { Metadata } from 'next';
import FeedSection from './FeedSection';

export const metadata: Metadata = {
  title: '포즈피드',
};

export default function Feed() {
  return <FeedSection />;
}
