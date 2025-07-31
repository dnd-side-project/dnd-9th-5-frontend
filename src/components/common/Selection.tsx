import { Icon } from '../common/Button';
import { ICON } from '@/constants';

// region tag
interface TagI {
  text: string;
  x?: boolean;
  violet?: boolean;
  onClick?: () => void;
}

export function Tag({ violet = false, x = false, onClick, text }: TagI) {
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

// region SelectionBasic
interface SelectionBasicI {
  data: Array<{ text: string; value: number }>;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectionBasic({ data, state, setState }: SelectionBasicI) {
  return (
    <div className="flex justify-evenly rounded-8">
      {data.map((item) => (
        <span
          key={item.text}
          id="subtitle-2"
          className={`flex h-40 grow cursor-pointer items-center justify-center border-1 first:rounded-l-8 last:rounded-r-8 ${
            state === item.value
              ? 'border-main-violet bg-main-violet-bright text-main-violet-dark'
              : 'border-border-default bg-sub-white text-secondary'
          }`}
          onClick={() => {
            setState(item.value);
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

// region SelectionTagList
interface SelectionTagListI {
  data: string[];
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

export function SelectionTagList({ data, state, setState }: SelectionTagListI) {
  const mergedData = Array.from(new Set([...data, ...state]));

  function clickTag(tag: string) {
    if (state.includes(tag)) {
      setState((prev) => prev.filter((item) => item !== tag));
    } else {
      setState((prev) => [...prev, tag]);
    }
  }

  return (
    <div className="flex flex-wrap gap-8">
      {mergedData.map((item) => {
        const selected = state.includes(item);
        const isCustomTag = !data.includes(item);

        return (
          <Tag
            key={item}
            violet={selected}
            x={isCustomTag}
            onClick={() => clickTag(item)}
            text={item}
          />
        );
      })}
    </div>
  );
}
