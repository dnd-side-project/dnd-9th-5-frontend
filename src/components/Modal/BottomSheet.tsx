import { IconButton } from '../Button';
import { AnimatedPortal } from '@/components/Portal';
import { ICON } from '@/constants/icon';
import useBottomSheet from '@/hooks/useBottomSheet';
import { StrictPropsWithChildren } from '@/types';

export default function BottomSheet({ children }: StrictPropsWithChildren) {
  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  if (!isBottomSheetOpen) return null;
  return (
    <>
      <div
        className="fixed inset-x-0 inset-y-0 z-modal bg-dimmed opacity-30"
        onClick={closeBottomSheet}
      />
      <AnimatedPortal
        motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
      >
        <div className="fixed inset-x-0 bottom-0 z-modal mx-auto max-w-440 rounded-t-16 bg-white">
          <div className="flex justify-end px-8 pt-12">
            <IconButton icon={ICON.close.black} onClick={closeBottomSheet} />
          </div>
          <div>{children}</div>
        </div>
      </AnimatedPortal>
    </>
  );
}
