import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Metadata } from 'next';

import FeedSection from './FeedSection';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { META_STRING } from '@/constants/meta';

export const metadata: Metadata = {
  title: '포즈피드',
  description: META_STRING.description.feed,
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
