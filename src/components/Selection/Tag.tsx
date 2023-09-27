import { Icon } from '../Icon';

interface Tag {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function Tag({ selected, onClick, text }: Tag) {
  return (
    <div
      className={`flex min-w-fit cursor-pointer items-center gap-6 rounded-30 px-12 py-5 ${
        selected ? 'bg-main-violet-bright' : 'bg-sub-white'
      }`}
      onClick={onClick}
    >
      <div id="subtitle-2" className={selected ? 'text-main-violet-dark' : 'text-secondary'}>
        {text}
      </div>
      {selected && <Icon id="close_gray" width={12} height={12} />}
    </div>
  );
}
