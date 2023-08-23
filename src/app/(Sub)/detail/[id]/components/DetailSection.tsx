'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { usePoseDetailQuery } from '@/apis';
import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Button } from '@/components/Button';
import { BASE_SITE_URL } from '@/constants';

interface DetailSectionProps {
  poseId: number;
}

export default function DetailSection({ poseId }: DetailSectionProps) {
  const { data } = usePoseDetailQuery(poseId);
  const pathname = usePathname();

  if (!data) return null;
  const { imageKey, tagAttributes, sourceUrl } = data.poseInfo;

  console.log(pathname);

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(BASE_SITE_URL + pathname);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link
        href={'https://' + sourceUrl}
        className="text-subtitle-2 flex h-26 justify-center text-tertiary"
      >
        {sourceUrl && '↗ 이미지 출처'}
      </Link>
      <Image src={imageKey} width={450} height={240} alt="detailImage" />
      <div className="flex gap-10 px-20 py-12">
        {tagAttributes?.split(',').map((tag, index) => <Tag key={index} name={tag} />)}
      </div>
      <BottomFixedDiv className="flex gap-8">
        <Button className="w-160 bg-sub-white" type="button" onClick={handleShareLink}>
          링크 공유
        </Button>
        <Button className="grow bg-main-violet text-white">카카오 공유</Button>
      </BottomFixedDiv>
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
      className="text-subtitle-2 rounded-30 bg-sub-white px-12 py-5 text-secondary"
    >
      {name}
    </button>
  );
}
