'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Source from './Source';
import TagButton from './TagButton';
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
import { PoseDataI } from '@/server/type';
import { getPoseDetail } from '@/server/api';

interface DetailSectionProps {
  poseId: number;
}

export default function DetailSection({ poseId }: DetailSectionProps) {
  const [data, setData] = useState<PoseDataI | null>(null);
  // const { data } = usePoseDetailQuery({ poseId });
  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poseId]);

  // region method
  async function fetchDetail() {
    const res = await getPoseDetail(poseId + '');
    setData(res.data);
  }

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);
    open(({ exit }) => (
      <Popup content="링크가 복사되었습니다.">
        <PrimaryButton text="확인" onClick={exit} />
      </Popup>
    ));
  };

  // region return
  if (!data) return null;
  const {
    image: imageKey,
    tags: tagAttributes,
    people: peopleCount,
    cut: frameCount,
    source,
    sourceUrl,
  } = data;
  const bookmarkCheck = false;

  return (
    <div>
      <Header
        close={true}
        menu={true}
        additional={<BookmarkButton poseId={poseId} isMarked={bookmarkCheck} style="black" />}
      />
      {source && sourceUrl && <Source source={source} url={sourceUrl} />}
      <div className="block">
        {isRendered || <div className="h-400 w-screen bg-sub-white" />}
        <PoseImage src={imageKey} responsive={true} onLoad={() => setIsRendered(true)} />
      </div>
      <div className="flex flex-wrap gap-10 px-20 py-12">
        <TagButton type="people" value={peopleCount} name={`${peopleCount}인`} />
        <TagButton type="frame" value={frameCount} name={`${frameCount}컷`} />
        {tagAttributes?.split(',').map((tag, index) => <TagButton key={index} name={tag} />)}
      </div>
      <MainFooter grow={true}>
        <PrimaryButton
          text="링크 공유"
          onClick={handleShareLink}
          variant="secondary"
          className="border border-border-default"
        />
        {/* <PrimaryButton className="grow" text="카카오 공유" onClick={() => shareKakao(poseId)} /> */}
      </MainFooter>
    </div>
  );
}
