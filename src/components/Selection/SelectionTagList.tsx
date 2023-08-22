import { ICON } from '@/constants/icon';
import Image from 'next/image';

interface SelectionTagList {
  data: string[];
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SelectionTagList({ data, state, setState }: SelectionTagList) {
  function clickTag(tag: string) {
    if (state.includes(tag)) {
      setState((prev) => prev.filter((item) => item !== tag));
    } else {
      setState((prev) => [...prev, tag]);
    }
  }
  return (
    <div className="flex flex-wrap gap-8">
      {data.map((item, idx) => {
        const selected = state.includes(item);
        return (
          <div
            key={idx}
            className={`flex gap-4 rounded-30 px-12 py-5 ${
              selected ? 'bg-main-violet-bright' : 'bg-sub-white'
            }`}
            onClick={() => clickTag(item)}
          >
            <div id="subtitle-2" className={selected ? 'text-main-violet-dark' : 'text-secondary'}>
              {item}
            </div>
            {selected && <Image src={ICON.close} width={12} height={12} alt="x" />}
          </div>
        );
      })}
    </div>
  );
}
