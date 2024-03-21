import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Metadata, ResolvingMetadata } from 'next';

import DetailSection from './DetailSection';
import { getPoseDetail } from '@/apis';
import { RejectedFallback } from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider/HydrationProvider';

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const {
    poseInfo: { peopleCount, frameCount, tagAttributes },
  } = await getPoseDetail(id);
  const description = `${tagAttributes},${frameCount}컷,${peopleCount}인 포즈추천`;
  const defaultOgTitle = (await parent).openGraph?.title;

  return {
    description,
    openGraph: {
      title: defaultOgTitle,
      description: '이 포즈는 어때요?',
      images: ['/meta/og_detail.png'],
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
