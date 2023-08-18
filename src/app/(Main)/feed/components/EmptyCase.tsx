import { PrimaryButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';
import Link from 'next/link';

export default function EmptyCase() {
  return (
    <div className="py-80 text-center">
      <h4 className="text-secondary">포즈를 보관해 보세요!</h4>
      <Spacing size={8} />
      <p className="text-tertiary">{`북마크 버튼으로 포즈를 보관할 수 있어요.\n포즈피드에서 멋진 포즈를 찾아 보관해 보세요.`}</p>
      <Spacing size={32} />
      <div className="flex justify-center">
        <Link href={'/feed'}>
          <PrimaryButton text={'포즈피드 바로가기'} type="secondary" />
        </Link>
      </div>
    </div>
  );
}
