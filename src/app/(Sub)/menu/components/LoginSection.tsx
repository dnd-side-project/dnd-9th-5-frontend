'use client';

import { Popup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';
import { Spacing } from '@/components/Spacing';
import { IMAGE } from '@/constants/image';
import Image from 'next/image';

function DefaultProfile() {
  return (
    <div className="rounded-full bg-white p-6">
      <Image width={40} height={40} alt="🪄" src={IMAGE.profile_default} />
    </div>
  );
}

export default function LoginSection() {
  const { open } = useOverlay();

  return (
    <section className="py-12">
      <div
        className="bg-violet flex items-center rounded-16 bg-main-violet-bright px-20 py-24"
        onClick={() =>
          open(({ exit }) => (
            <Popup onClick={exit} className="cursor-pointer rounded-8" onCloseOutside={exit}>
              <p>해당 기능은 아직 준비중이에요!</p>
              <p> 업데이트를 기대해 주세요.</p>
            </Popup>
          ))
        }
      >
        <DefaultProfile />
        <Spacing size={16} direction="horizontal" />
        <div id="subtitle-1">로그인하기</div>
      </div>
    </section>
  );
}
