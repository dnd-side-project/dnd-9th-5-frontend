import { Metadata, ResolvingMetadata } from 'next';
import DetailHeader from './components/DetailHeader';
import DetailSection from './components/DetailSection';
import { getPoseDetail } from '@/apis';
import { HydrationProvider } from '@/components/Provider/HydrationProvider';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = parseInt(params.id);
  const {
    poseInfo: { peopleCount, frameCount, tagAttributes },
  } = await getPoseDetail(id);
  const description = `${tagAttributes},${frameCount}컷,${peopleCount}인 포즈추천`;
  return {
    description,
    openGraph: {
      description: '이 포즈는 어때요?',
    },
  };
}

export default function DetailPage({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div>
      <DetailHeader />
      <HydrationProvider queryKey={['poseId', id]} queryFn={() => getPoseDetail(id)}>
        <DetailSection poseId={id} />
      </HydrationProvider>
    </div>
  );
}
