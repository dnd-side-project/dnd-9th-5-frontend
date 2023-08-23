import { PoseFeedParameter } from '@/apis';
import { frameCountList, peopleCountList, tagList } from '@/constants/filterList';
import { atom, useRecoilState } from 'recoil';

interface SelectedFilterItem {
  type: 'peopleCount' | 'frameCount' | 'tag';
  value: string;
}

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

  const selectedFilterItems = () => {
    const selectedList: SelectedFilterItem[] = [];
    const { peopleCount, frameCount, tags } = filterState;

    if (peopleCount > 0) {
      selectedList.push({ type: 'peopleCount', value: peopleCountList[peopleCount] });
    }
    if (frameCount > 0) {
      selectedList.push({ type: 'frameCount', value: frameCountList[frameCount] });
    }
    if (tags !== '') {
      const tagList = tags.split(',');
      for (let tag of tagList) {
        selectedList.push({ type: 'tag', value: tag });
      }
    }
    return selectedList;
  };

  function deleteSelectedFilterItem(item: SelectedFilterItem) {
    if (item.type === 'peopleCount') {
      setFilterState((prev) => {
        return { ...prev, peopleCount: 0 };
      });
    } else if (item.type === 'frameCount') {
      setFilterState((prev) => {
        return { ...prev, frameCount: 0 };
      });
    } else {
      const tagArray = filterState.tags.split(',');
      const newTagString = tagArray.filter((tag) => tag === item.value).join(',');
      setFilterState((prev) => {
        return { ...prev, tags: newTagString };
      });
    }
    console.log(filterState);
  }

  return { filterState, updateFilterState, selectedFilterItems, deleteSelectedFilterItem };
}
