'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Source from './Source';
import TagButton from './TagButton';
import { usePoseDetailQuery } from '@/apis';
import { MainFooter } from '@/app/(Main)/MainFooter';
import { PrimaryButton } from '@/components/Button';
import BookmarkButton from '@/components/Feed/BookmarkButton';
import Header from '@/components/Header';
import { Popup } from '@/components/Modal';
import PoseImage from '@/components/Modal/PoseImage';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { BASE_SITE_URL } from '@/constants';
import { useKakaoShare } from '@/hooks';
import { copy } from '@/utils/copy';

interface DetailSectionProps {
  poseId: number;
}

export default function DetailSection({ poseId }: DetailSectionProps) {
  const { data } = usePoseDetailQuery({ poseId });
  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();

  const [isRendered, setIsRendered] = useState(false);

  if (!data) return null;
  const { imageKey, tagAttributes, source, sourceUrl, peopleCount, frameCount, bookmarkCheck } =
    data.poseInfo;

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);
    open(({ exit }) => (
      <Popup content="링크가 복사되었습니다.">
        <PrimaryButton text="확인" onClick={exit} />
      </Popup>
    ));
  };

  return (
    <div>
      <Header
        close={true}
        menu={true}
        additional={<BookmarkButton poseId={poseId} isMarked={bookmarkCheck} style="black" />}
      />
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
      <MainFooter grow={false}>
        <PrimaryButton
          text="링크 공유"
          onClick={handleShareLink}
          variant="secondary"
          className="border border-border-default"
        />
        <PrimaryButton className="grow" text="카카오 공유" onClick={() => shareKakao(poseId)} />
      </MainFooter>
    </div>
  );
}
