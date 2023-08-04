import { HTMLAttributes, PropsWithChildren } from 'react';

interface HeaderProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  className?: string;
  props?: PropsWithChildren<HTMLAttributes<HTMLHeadElement>>;
}

export default function Header({ leftNode, rightNode, className, ...props }: HeaderProps) {
  return (
    <header
      className={`fixed inset-x-0 top-16 flex items-center justify-between bg-white px-20 ${className} h-48`}
      {...props}
    >
      {leftNode ? leftNode : <div />}
      {rightNode ? rightNode : <div />}
    </header>
  );
}
