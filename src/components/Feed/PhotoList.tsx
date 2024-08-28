import Photo from './Photo';
import { PoseFeedContents } from '@/apis';

interface PhotoList {
  data?: PoseFeedContents;
}

export default function PhotoList({ data }: PhotoList) {
  if (!data) return;
  return (
    <>
      {data.content.map((item) => (
        <Photo key={item.poseInfo.poseId} data={item.poseInfo} />
      ))}
    </>
  );
}
