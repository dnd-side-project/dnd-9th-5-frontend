import { AnimatedPortal } from '@/components/Portal';
import { ICON } from '@/constants/icon';
import useBottomSheet from '@/hooks/useBottomSheet';
import { StrictPropsWithChildren } from '@/types';
import Image from 'next/image';

export default function BottomSheet({ children }: StrictPropsWithChildren) {
  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  if (!isBottomSheetOpen) return null;
  return (
    <>
      <AnimatedPortal
        motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }}
      >
        <div
          className="fixed inset-x-0 inset-y-0 bg-dimmed opacity-30"
          onClick={closeBottomSheet}
        />
        <div className="fixed inset-x-0 bottom-0 rounded-t-16 bg-white">
          <div className="flex justify-end px-8 pt-12">
            <button className="p-12" onClick={closeBottomSheet}>
              <Image src={ICON.close} width={24} height={24} alt={'x'} />
            </button>
          </div>
          <div className="column flex flex-col gap-20 p-20">{children}</div>
        </div>
      </AnimatedPortal>
    </>
  );
}
