import Photo from './Photo';
import { PoseFeedContents } from '@/shared';

interface PhotoList {
  data?: PoseFeedContents;
}

export default function PhotoList({ data }: PhotoList) {
  if (!data) return;
  return (
    <>
      {data.content.map((item) => (
        <Photo
          key={item.poseInfo.poseId}
          imageKey={item.poseInfo.imageKey}
          source={item.poseInfo.source}
          id={item.poseInfo.poseId}
          isMarked={item.poseInfo.bookmarkCheck}
        />
      ))}
    </>
  );
}
