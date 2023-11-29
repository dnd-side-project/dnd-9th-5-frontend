'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import LinkShareModal from './LinkShareModal';
import Source from './Source';
import TagButton from './TagButton';
import { usePoseDetailQuery } from '@/apis';
import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Button } from '@/components/Button';
import ImageModal from '@/components/Modal/ImageModal.client';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { BASE_SITE_URL } from '@/constants/env';
import useKakaoShare from '@/hooks/useKakaoShare';
import { copy } from '@/utils/copy';

interface DetailSectionProps {
  poseId: number;
}

export default function DetailSection({ poseId }: DetailSectionProps) {
  const { data } = usePoseDetailQuery(poseId);
  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();

  if (!data) return null;
  const { imageKey, tagAttributes, source, sourceUrl, peopleCount, frameCount } = data.poseInfo;

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);

    open(({ exit }) => <LinkShareModal onClose={exit} />);
  };

  return (
    <div className="overflow-y-auto pb-160">
      {source && <Source source={source} url={sourceUrl} />}
      <div className="flex justify-center">
        <div className="relative">
          <Image
            src={imageKey}
            alt="detailImage"
            className="cursor-pointer"
            width={450}
            height={440}
            onClick={() => open(({ exit }) => <ImageModal image={imageKey} onClose={exit} />)}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 px-20 py-12">
        <TagButton type="people" value={peopleCount} name={`${peopleCount}인`} />
        <TagButton type="frame" value={frameCount} name={`${frameCount}컷`} />
        {tagAttributes?.split(',').map((tag, index) => <TagButton key={index} name={tag} />)}
      </div>
      <BottomFixedDiv className="flex gap-8">
        <Button className="max-w-120 bg-sub-white" type="button" onClick={handleShareLink}>
          링크 공유
        </Button>
        <Button
          className="grow bg-main-violet text-white"
          onClick={() => shareKakao(BASE_SITE_URL + pathname)}
        >
          카카오 공유
        </Button>
      </BottomFixedDiv>
    </div>
  );
}
