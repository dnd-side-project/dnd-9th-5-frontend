import { Icon } from '../Icon';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export default function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button className="flex h-48 w-48 items-center justify-center" {...props}>
      <Icon icon={icon} />
    </button>
  );
}
