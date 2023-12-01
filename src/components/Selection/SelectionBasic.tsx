interface SelectionBasic {
  data: Array<{ text: string; value: number }>;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectionBasic({ data, state, setState }: SelectionBasic) {
  return (
    <div className="flex justify-evenly rounded-8">
      {data.map((item) => (
        <span
          key={item.text}
          id="subtitle-2"
          className={`flex h-40 grow cursor-pointer items-center justify-center first:rounded-l-8 last:rounded-r-8 ${
            state === item.value
              ? 'border-1 border-main-violet bg-main-violet-bright text-main-violet-dark'
              : 'border-1 border-border-default bg-sub-white text-secondary'
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
