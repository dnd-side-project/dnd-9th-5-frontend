import { PoseDataI } from '@/server/type';
import Photo from './Photo';

interface PhotoList {
  datas?: PoseDataI[];
}

export default function PhotoList({ datas }: PhotoList) {
  if (!datas) return;
  return (
    <>
      {datas.map((data) => (
        <Photo key={data.id} data={data} />
      ))}
    </>
  );
}
