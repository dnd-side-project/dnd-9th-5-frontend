'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Source from './Source';
import TagButton from './TagButton';
import {
  BASE_SITE_URL,
  Button,
  Popup,
  PoseImage,
  copy,
  useKakaoShare,
  useOverlay,
  usePoseDetailQuery,
} from '@/shared';
import { Footer } from '@/widgets';

interface DetailSectionProps {
  poseId: number;
}

export default function DetailSection({ poseId }: DetailSectionProps) {
  const { data } = usePoseDetailQuery(poseId);
  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();

  const [isRendered, setIsRendered] = useState(false);

  if (!data) return null;
  const { imageKey, tagAttributes, source, sourceUrl, peopleCount, frameCount } = data.poseInfo;

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);
    open(({ exit }) => (
      <Popup content="링크가 복사되었습니다.">
        <Button text="확인" onClick={exit} />
      </Popup>
    ));
  };

  return (
    <div>
      {source && <Source source={source} url={sourceUrl} />}
      <div className="block">
        {isRendered || <div className="h-400 w-screen bg-sub-white" />}
        <PoseImage src={imageKey} responsive={true} onLoad={() => setIsRendered(true)} />
      </div>
      <div className="flex flex-wrap gap-10 px-20 py-12">
        <TagButton type="people" value={peopleCount} name={`${peopleCount}인`} />
        <TagButton type="frame" value={frameCount} name={`${frameCount}컷`} />
        {tagAttributes?.split(',').map((tag, index) => <TagButton key={index} name={tag} />)}
      </div>
      <Footer>
        <Button
          text="링크 공유"
          onClick={handleShareLink}
          variant="secondary"
          className="border border-border-default"
        />
        <Button text="카카오 공유" onClick={() => shareKakao(poseId)} />
      </Footer>
    </div>
  );
}
