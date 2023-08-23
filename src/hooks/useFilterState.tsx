import { PoseFeedParameter } from '@/apis';
import { atom, useRecoilState } from 'recoil';

const filterStateAtom = atom<PoseFeedParameter>({
  key: 'filterState',
  default: { peopleCount: 0, frameCount: 0, tags: '' },
});

export default function useFilterState() {
  const [filterState, setFilterState] = useRecoilState(filterStateAtom);

  function updateFilterState(peopleCount: number, frameCount: number, tagArray: string[]) {
    const tagString = tagArray.join(',');
    setFilterState({ peopleCount, frameCount, tags: tagString });
  }

  return { filterState, updateFilterState };
}
