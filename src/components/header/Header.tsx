interface HeaderProps {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  className?: string;
}

export default function Header({ leftNode, rightNode, className }: HeaderProps) {
  return (
    <header
      className={`fixed inset-x-0 top-16 flex items-center justify-between bg-white px-20 ${className} h-48`}
    >
      {leftNode ? leftNode : <div />}
      {rightNode ? rightNode : <div />}
    </header>
  );
}
