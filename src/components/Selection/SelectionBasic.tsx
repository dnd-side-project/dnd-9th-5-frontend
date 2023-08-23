interface SelectionBasic {
  data: { text: string; value: number }[];
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectionBasic({ data, state, setState }: SelectionBasic) {
  return (
    <div className="flex justify-evenly rounded-8">
      {data.map((item) => (
        <div
          key={item.text}
          className={`flex h-40 grow cursor-pointer items-center justify-center first:rounded-l-8 last:rounded-r-8 ${
            state === item.value
              ? 'border-1 border-main-violet bg-main-violet-bright'
              : 'border-1 border-border-default bg-sub-white'
          }`}
          onClick={() => setState(item.value)}
        >
          <div
            id="subtitle-2"
            className={state === item.value ? 'text-main-violet-dark' : 'text-secondary'}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}
