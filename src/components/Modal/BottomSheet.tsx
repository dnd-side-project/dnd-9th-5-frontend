import { motion } from 'framer-motion';

import { IconButton } from '../common/Button';
import { ICON } from '@/constants';
import { useBottomSheet } from '@/hooks';
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

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed inset-x-0 bottom-0 z-modal mx-auto max-w-layout rounded-t-16 bg-white"
      >
        <div className="flex justify-end px-8 pt-12">
          <IconButton icon={ICON.close.black} onClick={closeBottomSheet} />
        </div>
        <div>{children}</div>
      </motion.div>
    </>
  );
}
