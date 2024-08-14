import { Icon } from '../Button/Icon';
import { ICON } from '@/shared/constants';

interface Tag {
  text: string;
  x?: boolean;
  violet?: boolean;
  onClick?: () => void;
}

export default function Tag({ violet = false, x = false, onClick, text }: Tag) {
  return (
    <div
      className={`flex min-w-fit cursor-pointer items-center gap-6 rounded-30 px-12 py-5 ${
        violet ? 'bg-main-violet-bright' : 'bg-sub-white'
      }`}
      onClick={onClick}
    >
      <div id="subtitle-2" className={violet ? 'text-main-violet-dark' : 'text-secondary'}>
        {text}
      </div>
      {x && <Icon icon={ICON.close.gray} size={12} />}
    </div>
  );
}
