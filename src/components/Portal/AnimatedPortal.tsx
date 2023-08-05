'use client';

import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { Portal } from '.';
import { StrictPropsWithChildren } from '@/types';

interface AnimatedPortalProps {
  motionProps: MotionProps;
}

export default function AnimatedPortal({
  children,
  motionProps,
}: StrictPropsWithChildren<AnimatedPortalProps>) {
  return (
    <Portal>
      <AnimatePresence>
        <motion.div {...motionProps}>{children}</motion.div>
      </AnimatePresence>
    </Portal>
  );
}
