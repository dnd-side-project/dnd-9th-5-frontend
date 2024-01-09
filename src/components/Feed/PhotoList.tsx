import { PoseInfo } from '@/apis';
import Photo from './Photo';

interface PhotoList {
  data?: Array<{ poseInfo: PoseInfo }>;
}

export default function PhotoList({ data }: PhotoList) {
  if (!data) return <Photo />;
  return (
    <>
      {data.map((item) => (
        <Photo
          key={item.poseInfo.poseId}
          imageKey={item.poseInfo.imageKey}
          source={item.poseInfo.source}
          id={item.poseInfo.poseId}
        />
      ))}
    </>
  );
}
