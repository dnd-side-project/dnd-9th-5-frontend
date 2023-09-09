import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

interface LinkShareModalProps {
  onClose: () => void;
}
export default function LinkShareModal({ onClose }: LinkShareModalProps) {
  return (
    <Modal className="w-300 rounded-16">
      <p className="py-32">링크가 복사되었습니다.</p>
      <Button className="bg-main-violet text-white" onClick={onClose}>
        확인
      </Button>
    </Modal>
  );
}
