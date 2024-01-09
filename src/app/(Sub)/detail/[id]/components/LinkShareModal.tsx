import { PrimaryButton } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface LinkShareModalProps {
  onClose: () => void;
}
export default function LinkShareModal({ onClose }: LinkShareModalProps) {
  return (
    <Modal className="w-300 rounded-16 ">
      <p className="py-32">링크가 복사되었습니다.</p>
      <PrimaryButton text="확인" onClick={onClose} />
      <Spacing size={16} />
    </Modal>
  );
}
