import ButtonSection from './components/ButtonSection';
import DetailHeader from './components/DetailHeader';
import DetailSection from './components/DetailSection';
import { getPoseDetail } from '@/apis';
import { HydrationProvider } from '@/components/Provider/HydrationProvider';

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
