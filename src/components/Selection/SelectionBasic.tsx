interface SelectionBasic {
  data: string[];
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectionBasic({ data, state, setState }: SelectionBasic) {
  return (
    <div className="flex justify-evenly rounded-8">
      {data.map((item, idx) => (
        <div
          key={item}
          className={`flex h-40 grow cursor-pointer items-center justify-center first:rounded-l-8 last:rounded-r-8 ${
            state === idx
              ? 'border-1 border-main-violet bg-main-violet-bright'
              : 'border-1 border-border-default bg-sub-white'
          }`}
          onClick={() => setState(idx)}
        >
          <div
            id="subtitle-2"
            className={state === idx ? 'text-main-violet-dark' : 'text-secondary'}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
