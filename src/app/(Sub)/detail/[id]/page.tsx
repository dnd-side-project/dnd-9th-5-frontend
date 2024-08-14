import { Metadata } from 'next';

import DetailSection from './DetailSection';
import { HydrationProvider, OPEN_GRAPH, PageAnimation, getPoseDetail } from '@/shared';
import { Header } from '@/widgets';

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
      <Header />
      <PageAnimation>
        <HydrationProvider queryKey={['poseId', id]} queryFn={() => getPoseDetail(id)}>
          <DetailSection poseId={id} />
        </HydrationProvider>
      </PageAnimation>
    </div>
  );
}
