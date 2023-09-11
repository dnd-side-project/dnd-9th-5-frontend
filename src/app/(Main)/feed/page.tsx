import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Metadata } from 'next';

import FeedSection from './FeedSection';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';

export const metadata: Metadata = {
  title: '포즈피드',
  description: '포즈피드에서 조건에 맞는 포즈를 찾고, 친구한테 공유해보세요',
};

export default function Feed() {
  return (
    <QueryAsyncBoundary
      rejectedFallback={RejectedFallback}
      pendingFallback={<Loading className="h-[calc(100dvh-178px)]" />}
    >
      <PageAnimation>
        <FeedSection />
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
