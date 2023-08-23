import Tag from './Tag';

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
      {data.map((item) => {
        const selected = state.includes(item);
        return <Tag key={item} selected={selected} onClick={() => clickTag(item)} text={item} />;
      })}
    </div>
  );
}
