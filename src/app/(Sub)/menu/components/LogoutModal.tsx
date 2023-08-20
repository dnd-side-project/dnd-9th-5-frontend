import { Button } from '@/components/Button';
import { Popup } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface MenuModalProps {
  onConfirm?: () => void;
  onClose: () => void;
}

export default function LogoutModal({ onConfirm, onClose }: MenuModalProps) {
  return (
    <Popup className="text-center">
      <Spacing size={32} />
      <h4>로그아웃</h4>
      <Spacing size={8} />
      <p>로그아웃시 북마크를 쓸 수 없어요.</p>
      <p>정말 로그아웃하시겠어요?</p>
      <Spacing size={32} />
      <div className="flex w-full justify-evenly gap-8">
        <Button className="bg-default" onClick={onConfirm}>
          로그아웃
        </Button>
        <Button className="bg-main-violet text-white" onClick={onClose}>
          로그인 유지
        </Button>
      </div>
    </Popup>
  );
}
