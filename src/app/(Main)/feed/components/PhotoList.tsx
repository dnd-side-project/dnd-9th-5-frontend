import Photo from './Photo';
import { PoseInfo } from '@/apis';

interface PhotoList {
  data?: Array<{ poseInfo: PoseInfo }>;
}

export default function PhotoList({ data }: PhotoList) {
  return (
    <div className="columns-2	overflow-y-scroll py-16">
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
    </div>
  );
}
