import { IconButton } from '../Button';
import { AnimatedPortal, ICON, StrictPropsWithChildren, useBottomSheet } from '@/shared';


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
        <div className="fixed inset-x-0 bottom-0 mx-auto bg-white z-modal max-w-layout rounded-t-16">
          <div className="flex justify-end px-8 pt-12">
            <IconButton icon={ICON.close.black} onClick={closeBottomSheet} />
          </div>
          <div>{children}</div>
        </div>
      </AnimatedPortal>
    </>
  );
}
