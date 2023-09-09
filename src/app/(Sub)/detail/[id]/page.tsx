import { QueryAsyncBoundary } from '@suspensive/react-query';

import DetailHeader from './components/DetailHeader';
import DetailSection from './components/DetailSection';
import { getPoseDetail } from '@/apis';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider/HydrationProvider';

export default function DetailPage({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div>
      <DetailHeader />
      <QueryAsyncBoundary
        rejectedFallback={RejectedFallback}
        pendingFallback={<Loading className="h-[calc(100dvh-178px)]" />}
      >
        <PageAnimation>
          <HydrationProvider queryKey={['poseId', id]} queryFn={() => getPoseDetail(id)}>
            <DetailSection poseId={id} />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
    </div>
  );
}
