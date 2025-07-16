'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Source from '../../app/detail/[id]/Source';
import TagButton from '../../app/detail/[id]/TagButton';
import PrimaryButton from '@/components/common/Button';
import BookmarkButton from '@/components/Feed/BookmarkButton';
import Header from '@/components/Layout/Header';
import { MainFooter } from '@/components/Layout/MainFooter';
import { Popup } from '@/components/Modal';
import PoseImage from '@/components/Modal/PoseImage';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { BASE_SITE_URL } from '@/constants';
import { useKakaoShare } from '@/hooks';
import { PoseDataI } from '@/server/type';
import { copy } from '@/utils/copy';

interface PropsI {
  data: PoseDataI;
}

export default function PoseDetailPage({ data }: PropsI) {
  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();
  const [isRendered, setIsRendered] = useState(false);

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
  const { id, image, tags, people, cut, source, sourceUrl } = data;
  const aspectRatio = image.size ? image.size.width / image.size.height : 1;
  const bookmarkCheck = false;

  return (
    <div>
      <Header
        close={true}
        menu={true}
        additional={<BookmarkButton poseId={parseInt(id)} isMarked={bookmarkCheck} style="black" />}
      />
      {source && sourceUrl && <Source source={source} url={sourceUrl} />}
      <div className="block">
        {!isRendered && <div style={{ aspectRatio }} className="w-full bg-sub-white" />}
        <PoseImage src={image.url} responsive={true} onLoad={() => setIsRendered(true)} />
      </div>
      <div className="flex flex-wrap gap-10 px-20 py-12">
        <TagButton type="people" value={people} name={`${people}인`} />
        <TagButton type="frame" value={cut} name={`${cut}컷`} />
        {tags?.map((tag, index) => <TagButton key={index} name={tag} />)}
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
