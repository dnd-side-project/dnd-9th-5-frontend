'use client';

import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';

import { usePoseDetailQuery } from '@/apis';

interface DetailSectionProps {}
export default function DetailSection() {
  const { id } = useParams();

  const { data } = usePoseDetailQuery(+id);

  if (!data) return null;

  const { imageKey, tagAttributes } = data.poseInfo;
  return (
    <div>
      <Image src={imageKey} width={450} height={240} alt="detailImage" />
      <div className="flex gap-10 px-20 py-12">
        {tagAttributes.split(',').map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
    </div>
  );
}
interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <button
      type="button"
      className="text-subtitle-2 rounded-30 bg-sub-white px-12 py-5 text-secondary "
    >
      {name}
    </button>
  );
}
