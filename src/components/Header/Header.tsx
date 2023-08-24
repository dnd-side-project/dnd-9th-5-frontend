import { HTMLAttributes, PropsWithChildren } from 'react';

interface HeaderProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  className?: string;
  headerDownNode?: React.ReactNode;
  props?: PropsWithChildren<HTMLAttributes<HTMLHeadElement>>;
}

export default function Header({
  leftNode,
  rightNode,
  className,
  headerDownNode,
  ...props
}: HeaderProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-10 bg-white pt-8">
      <header
        className={`flex h-48 items-center justify-between ${className ? className : ''}`}
        {...props}
      >
        {leftNode ? leftNode : <div />}
        {rightNode ? rightNode : <div />}
      </header>
      {headerDownNode}
    </div>
  );
}
