import { data } from '../data';
import Photo from './Photo';

export default function PhotoList() {
  return (
    <>
      <div className="columns-2	overflow-y-scroll">
        {data.recommendedContents.content.map((item) => (
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
