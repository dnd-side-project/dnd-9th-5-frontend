import { atom, useRecoilState } from 'recoil';

export interface FilterState {
  peopleCount: number;
  frameCount: number;
  tags: string[];
}

interface SelectedFilterItem {
  type: 'peopleCount' | 'frameCount' | 'tag';
  value: string;
}

const filterStateAtom = atom<FilterState>({
  key: 'filterState',
  default: { peopleCount: 0, frameCount: 0, tags: [] },
});

export default function useFilterState() {
  const [filterState, setFilterState] = useRecoilState(filterStateAtom);

  function updateFilterState({ peopleCount, frameCount, tags }: FilterState) {
    setFilterState({ peopleCount, frameCount, tags });
  }

  const selectedFilterItems = () => {
    const selectedList: SelectedFilterItem[] = [];
    const { peopleCount, frameCount, tags } = filterState;

    if (peopleCount > 0) {
      selectedList.push({ type: 'peopleCount', value: `${peopleCount}인` });
    }
    if (frameCount > 0) {
      selectedList.push({ type: 'frameCount', value: `${frameCount}컷` });
    }
    for (let tag of tags) {
      selectedList.push({ type: 'tag', value: tag });
    }
    return selectedList;
  };

  function deleteSelectedFilterItem(item: SelectedFilterItem) {
    console.log(item);
    if (item.type === 'peopleCount') {
      setFilterState((prev) => {
        return { ...prev, peopleCount: 0 };
      });
    } else if (item.type === 'frameCount') {
      setFilterState((prev) => {
        return { ...prev, frameCount: 0 };
      });
    } else {
      const newTags = filterState.tags.filter((tag) => tag !== item.value);
      setFilterState((prev) => {
        return { ...prev, tags: newTags };
      });
    }
    console.log(filterState);
  }

  return { filterState, updateFilterState, selectedFilterItems, deleteSelectedFilterItem };
}
