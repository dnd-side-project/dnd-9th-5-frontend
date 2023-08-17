import { COLOR } from '@/constants/color';
import { ICON } from '@/constants/icon';
import Image from 'next/image';

interface SelectionTag {
  data: string[];
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SelectionTag({ data, state, setState }: SelectionTag) {
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
        const bg = `bg-[${selected ? COLOR.violet[100] : COLOR.gray[50]}]`;
        return (
          <div
            key={idx}
            className={`${bg} flex gap-4 rounded-30 px-12 py-5`}
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
