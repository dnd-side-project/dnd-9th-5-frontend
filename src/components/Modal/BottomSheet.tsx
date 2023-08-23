import { AnimatedPortal } from '@/components/Portal';
import { ICON } from '@/constants/icon';
import useBottomSheet from '@/hooks/useBottomSheet';
import Image from 'next/image';

interface BottomSheet {
  children: React.ReactNode;
  beforeClose?(): void;
}

export default function BottomSheet({ children, beforeClose }: BottomSheet) {
  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  function close() {
    beforeClose?.();
    closeBottomSheet();
  }

  if (!isBottomSheetOpen) return null;
  return (
    <>
      <div className="fixed inset-x-0 inset-y-0 z-30 bg-dimmed opacity-30" onClick={close} />
      <AnimatedPortal
        motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
      >
        <div className="fixed inset-x-0 bottom-0 z-30 rounded-t-16 bg-white">
          <div className="flex justify-end px-8 pt-12">
            <button className="p-12" onClick={close}>
              <Image src={ICON.close} width={24} height={24} alt={'x'} />
            </button>
          </div>
          <div className="column flex flex-col gap-20 p-20">{children}</div>
        </div>
      </AnimatedPortal>
    </>
  );
}
