'use client';

import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Portal } from '.';

type AnimatedPortalProps = {
  motionProps: MotionProps;
} & PropsWithChildren;

export default function AnimatedPortal({ children, motionProps }: AnimatedPortalProps) {
  return (
    <Portal>
      <AnimatePresence>
        <motion.div {...motionProps}>{children}</motion.div>
      </AnimatePresence>
    </Portal>
  );
}
