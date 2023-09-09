'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LinkShareModal from './LinkShareModal';
import { usePoseDetailQuery } from '@/apis';
import BottomFixedDiv from '@/components/BottomFixedDiv';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { BASE_SITE_URL } from '@/constants';
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
  const { imageKey, tagAttributes, sourceUrl } = data.poseInfo;

  const handleShareLink = async () => {
    await copy(BASE_SITE_URL + pathname);

    open(({ exit }) => <LinkShareModal onClose={exit} />);
  };

  return (
    <div className="overflow-y-auto pb-160">
      {sourceUrl && (
        <Link
          href={'https://' + sourceUrl}
          className="text-subtitle-2 flex h-26 justify-center text-tertiary"
        >
          ↗ 이미지 출처
        </Link>
      )}
      <div className="flex justify-center">
        <div className="relative">
          <Image
            src={imageKey}
            alt="detailImage"
            className="cursor-pointer"
            width={450}
            height={440}
            onClick={() =>
              open(({ exit }) => (
                <Modal>
                  <Image
                    src={imageKey}
                    alt="enlargementImage"
                    priority
                    loading="eager"
                    onClick={exit}
                    width={500}
                    height={440}
                    className="cursor-pointer"
                  />
                </Modal>
              ))
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 px-20 py-12">
        {tagAttributes?.split(',').map((tag, index) => <Tag key={index} name={tag} />)}
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
interface TagProps {
  name: string;
}

function Tag({ name }: TagProps) {
  return (
    <Link
      href={`/feed?filter=${name}`}
      type="button"
      className="text-subtitle-2 whitespace-nowrap rounded-30 bg-sub-white px-12 py-5 text-secondary"
    >
      {name}
    </Link>
  );
}
