'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import LinkShareModal from './LinkShareModal';
import { usePoseDetailQuery } from '@/apis';
import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Button } from '@/components/Button';
import ImageModal from '@/components/Modal/ImageModal.client';
import { useOverlay } from '@/components/Overlay/useOverlay';
import useKakaoShare from '@/hooks/useKakaoShare';
import { copy } from '@/utils/copy';
import { BASE_SITE_URL } from '@/constants';
import TagButton from './TagButton';

interface DetailSectionProps {
  poseId: number;
}

export default function DetailSection({ poseId }: DetailSectionProps) {
  const { data } = usePoseDetailQuery(poseId);
  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();

  if (!data) return null;
  const { imageKey, tagAttributes, sourceUrl, peopleCount, frameCount } = data.poseInfo;

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);

    open(({ exit }) => <LinkShareModal onClose={exit} />);
  };

  return (
    <div className="overflow-y-auto pb-160">
      {sourceUrl && (
        <p
          className="text-subtitle-2 flex h-26 justify-center text-tertiary"
          onClick={() => window.open('https://' + sourceUrl)}
        >
          ↗ 이미지 출처
        </p>
      )}
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
