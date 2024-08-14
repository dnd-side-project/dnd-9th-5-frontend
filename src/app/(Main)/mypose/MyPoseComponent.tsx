'use client';

import { Button } from '@/shared';
import { EmptyCase, PreparingPopup, useOverlay } from '@/shared';

export default function MyPoseComponent() {
  const { open } = useOverlay();

  return (
    <EmptyCase
      title={'나만의 포즈를 추가해 보세요!'}
      text={'포즈피드에 네컷사진을 업로드할 수 있어요'}
    >
      <Button
        onClick={() => open(({ exit }) => <PreparingPopup onClose={exit} />)}
        text="포즈 등록하기"
        variant="secondary"
      />
    </EmptyCase>
  );
}
