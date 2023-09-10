import { Modal } from '.';

interface PreparingModalProps {
  onClose: () => void;
}
export default function PreparingModal({ onClose }: PreparingModalProps) {
  return (
    <Modal onClick={onClose} className="cursor-pointer rounded-8 py-20" onCloseOutside={onClose}>
      <p>해당 기능은 아직 준비중이에요!</p>
      <p> 업데이트를 기대해 주세요.</p>
    </Modal>
  );
}
