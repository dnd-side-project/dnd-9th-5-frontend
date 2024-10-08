'use client';

import { PrimaryButton } from '@/components/Button';
import EmptyCase from '@/components/Feed/EmptyCase';
import { PreparingPopup } from '@/components/Modal';
import { useOverlay } from '@/components/Overlay/useOverlay';

export default function MyPoseComponent() {
  const { open } = useOverlay();

  return (
    <EmptyCase
      title={'나만의 포즈를 추가해 보세요!'}
      text={'포즈피드에 네컷사진을 업로드할 수 있어요'}
    >
      <PrimaryButton
        onClick={() => open(({ exit }) => <PreparingPopup onClose={exit} />)}
        text="포즈 등록하기"
        variant="secondary"
      />
    </EmptyCase>
  );
}
