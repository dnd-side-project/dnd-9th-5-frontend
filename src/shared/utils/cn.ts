import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

const customTwMerge = extendTailwindMerge({});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};
