import { StrictPropsWithChildren } from '@/types';
import type { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  props?: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  className,
  type = 'button',
  ...props
}: StrictPropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`flex h-60 w-full items-center justify-center rounded-xl py-14 text-center text-16 ${className}`}
      type={type}
      {...props}
    >
      <h5>{children}</h5>
    </button>
  );
}
