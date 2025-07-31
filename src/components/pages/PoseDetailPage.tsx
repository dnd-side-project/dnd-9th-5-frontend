'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { Tag } from '../common/Selection';
import { MainFooter } from '../Layout/MainFooter';
import PrimaryButton from '@/components/common/Button';
import BookmarkButton from '@/components/Feed/BookmarkButton';
import Header, { CloseButton } from '@/components/Layout/Header';
import { Popup } from '@/components/Modal';
import PoseImage from '@/components/Modal/PoseImage';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { BASE_SITE_URL } from '@/constants';
import { useKakaoShare } from '@/hooks';
import { PoseDataI } from '@/server/type';
import { poseDetailSelector } from '@/store/atom';
import { copy } from '@/utils/copy';

interface PropsI {
  fetchedData: PoseDataI;
}

export default function PoseDetailPage({ fetchedData }: PropsI) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromFeed = searchParams.get('fromFeed') === 'true';

  const { shareKakao } = useKakaoShare();
  const { open } = useOverlay();
  const pathname = usePathname();
  const [isRendered, setIsRendered] = useState(false);

  const cachedData = useRecoilValue(poseDetailSelector);
  const [data, setData] = useState(fromFeed ? cachedData : fetchedData);

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);
    open(({ exit }) => (
      <Popup content="링크가 복사되었습니다.">
        <PrimaryButton text="확인" onClick={exit} />
      </Popup>
    ));
  };

  const handleBack = () => {
    if (fromFeed) {
      return router.back();
    }
    return router.replace('/feed');
  };

  // region return
  if (!data) return null;
  const { id, image, tags, people, cut, source, sourceUrl } = data;
  const aspectRatio = image.size ? image.size.width / image.size.height : 1;
  const bookmarkCheck = false;

  return (
    <div>
      <Header
        left={<CloseButton onClick={handleBack} />}
        right={[
          <BookmarkButton
            key="bookmark"
            poseId={parseInt(id)}
            isMarked={bookmarkCheck}
            style="black"
          />,
        ]}
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

// region Source
interface Source {
  source: string;
  url: string;
}

function Source({ source, url }: Source) {
  return (
    <div className="flex h-60 items-center px-19">
      <Link href={url} target="_blank" className="rounded-8 bg-divider px-12 py-5 text-main-violet">
        {source} ↗
      </Link>
    </div>
  );
}

// region TagButton
interface TagButtonProps {
  type?: 'people' | 'frame' | 'tag';
  value?: number;
  name: string;
}

function TagButton({ type = 'tag', value, name }: TagButtonProps) {
  const router = useRouter();

  const handleTag = () => {
    const searchParams = new URLSearchParams();
    if (type === 'people') {
      searchParams.append('people', (value ? (value > 5 ? 5 : value) : 0).toString());
    } else if (type === 'frame') {
      searchParams.append('cut', (value ? (value > 8 ? 8 : value) : 0).toString());
    } else {
      searchParams.append('tags', new Array(name).join(','));
    }
    router.push(`/feed?${searchParams.toString()}`);
  };

  return <Tag text={name} onClick={handleTag} />;
}
