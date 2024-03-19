import Popup from './Popup';

interface PreparingModalProps {
  onClose: () => void;
}
export default function PreparingPopup({ onClose }: PreparingModalProps) {
  return (
    <Popup onClose={onClose}>
      <div>{`해당 기능은 아직 준비중이에요!\n업데이트를 기대해 주세요.`}</div>
    </Popup>
  );
}
