interface WaitingToastProps {
  onClose: () => void;
}
export default function WaitingToast({ onClose }: WaitingToastProps) {
  return (
    <div
      onClick={onClose}
      className="inset-x-0 mx-auto max-w-390 cursor-pointer rounded-4 bg-zinc-900 bg-opacity-80 px-36 py-12 text-white"
    >
      해당 기능은 준비 중입니다. 조금만 기다려 주세요!
    </div>
  );
}
