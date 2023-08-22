import { PoseInfo } from '@/apis';
import Photo from './Photo';

interface PhotoList {
  data: { poseInfo: PoseInfo }[];
}

export default function PhotoList({ data }: PhotoList) {
  return (
    <>
      <div className="columns-2	overflow-y-scroll">
        {data.map((item) => (
          <Photo
            key={item.poseInfo.poseId}
            imageKey={item.poseInfo.imageKey}
            source={item.poseInfo.source}
          />
        ))}
      </div>
    </>
  );
}
