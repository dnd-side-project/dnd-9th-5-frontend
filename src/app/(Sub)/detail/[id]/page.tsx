import { Metadata } from 'next';

import DetailSection from './DetailSection';
import { getPoseDetail } from '@/apis';
import { OPEN_GRAPH } from '@/constants';

// 상세페이지 메타데이터 생성
// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const id = parseInt(params.id);
//   const {
//     poseInfo: { peopleCount, frameCount, tagAttributes },
//   } = await getPoseDetail(id);
//   const description = `${tagAttributes},${frameCount}컷,${peopleCount}인 포즈추천`;

//   return {
//     description,
//     openGraph: {
//       title: OPEN_GRAPH.detail.title,
//       description: OPEN_GRAPH.detail.description,
//       images: [OPEN_GRAPH.detail.image],
//     },
//   };
// }

export default function DetailPage({ params }: { params: { id: number } }) {
  const { id } = params;

  return (
    <div>
      <DetailSection poseId={id} />
    </div>
  );
}
