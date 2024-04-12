'use client';

import { usePathname } from 'next/navigation';

import Source from './Source';
import TagButton from './TagButton';
import { usePoseDetailQuery } from '@/apis';
import { BottomFixedDiv, PrimaryButton } from '@/components/Button';
import { Popup } from '@/components/Modal';
import PoseImage from '@/components/Modal/PoseImage';
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
    open(({ exit }) => (
      <Popup content="링크가 복사되었습니다.">
        <PrimaryButton text="확인" onClick={exit} />
      </Popup>
    ));
  };

  return (
    <div className="overflow-y-auto">
      {source && <Source source={source} url={sourceUrl} />}
      <div className="block">
        <PoseImage src={imageKey} responsive={true} />
      </div>
      <div className="flex flex-wrap gap-10 px-20 py-12">
        <TagButton type="people" value={peopleCount} name={`${peopleCount}인`} />
        <TagButton type="frame" value={frameCount} name={`${frameCount}컷`} />
        {tagAttributes?.split(',').map((tag, index) => <TagButton key={index} name={tag} />)}
      </div>
      <BottomFixedDiv>
        <PrimaryButton
          text="링크 공유"
          onClick={handleShareLink}
          type="secondary"
          className="border border-border-default"
        />
        <PrimaryButton text="카카오 공유" onClick={() => shareKakao(BASE_SITE_URL + pathname)} />
      </BottomFixedDiv>
    </div>
  );
}
