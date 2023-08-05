import type { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'button' | 'submit';
  className?: string;
  props?: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;
}

export default function Button({ text, type = 'button', className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex h-60 w-full items-center justify-center rounded-xl py-14 text-center text-16 ${className}`}
      type={type}
      {...props}
    >
      <h5>{text}</h5>
    </button>
  );
}
