import PoseDetailPage from '../../../components/pages/PoseDetailPage';
import { getPoseDetail } from '@/server/api';

export default async function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data } = await getPoseDetail(id);
  console.log('🚀 ~ DetailPage ~ data:', data);

  return (
    <div>
      <PoseDetailPage data={data} />
    </div>
  );
}
