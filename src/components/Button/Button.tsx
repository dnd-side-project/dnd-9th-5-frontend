'use client';
import { type HTMLMotionProps, motion } from 'framer-motion';

import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  className?: string;
  type?: 'button' | 'submit';
  isActive?: boolean;
}

const variants = {
  active: {
    scale: [1.1, 1],
  },
  inactive: {
    scale: 1,
  },
};

export default function Button({
  children,
  className,
  type = 'button',
  isActive,
  ...props
}: StrictPropsWithChildren<ButtonProps>) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        'flex h-60 w-full items-center justify-center rounded-xl py-14 text-center text-16',
        className
      )}
      type={type}
      animate={isActive ? 'active' : 'inactive'}
      variants={variants}
      {...props}
    >
      <h5>{children}</h5>
    </motion.button>
  );
}
