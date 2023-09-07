import Photo from './Photo';
import { PoseInfo } from '@/apis';

interface PhotoList {
  data?: Array<{ poseInfo: PoseInfo }>;
}

export default function PhotoList({ data }: PhotoList) {
  return (
    <>
      {data ? (
        data.map((item) => (
          <Photo
            key={item.poseInfo.poseId}
            imageKey={item.poseInfo.imageKey}
            source={item.poseInfo.source}
            id={item.poseInfo.poseId}
          />
        ))
      ) : (
        <Photo />
      )}
    </>
  );
}
