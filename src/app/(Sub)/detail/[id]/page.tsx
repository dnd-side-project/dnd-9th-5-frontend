import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Metadata, ResolvingMetadata } from 'next';

import DetailSection from './DetailSection';
import { getPoseDetail } from '@/apis';
import { RejectedFallback } from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider/HydrationProvider';
import { OPEN_GRAPH } from '@/constants/meta';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = parseInt(params.id);
  const {
    poseInfo: { peopleCount, frameCount, tagAttributes },
  } = await getPoseDetail(id);
  const description = `${tagAttributes},${frameCount}컷,${peopleCount}인 포즈추천`;

  return {
    description,
    openGraph: {
      title: OPEN_GRAPH.detail.title,
      description: OPEN_GRAPH.detail.description,
      images: [OPEN_GRAPH.detail.image],
    },
  };
}

export default function DetailPage({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div>
      <Header close={true} menu={true} />
      <QueryAsyncBoundary
        rejectedFallback={RejectedFallback}
        pendingFallback={<Loading className="h-[calc(100dvh-400px)]" />}
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
