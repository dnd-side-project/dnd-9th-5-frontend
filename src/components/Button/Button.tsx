import { type HTMLMotionProps, motion } from 'framer-motion';

import type { StrictPropsWithChildren } from '@/types';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  className,
  type = 'button',
  ...props
}: StrictPropsWithChildren<ButtonProps>) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={`flex h-60 w-full items-center justify-center rounded-xl py-14 text-center text-16 ${className}`}
      type={type}
      {...props}
    >
      <h5>{children}</h5>
    </motion.button>
  );
}
