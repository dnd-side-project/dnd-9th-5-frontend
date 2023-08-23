import { PrimaryButton } from '@/components/Button';
import BottomSheet from '@/components/Modal/BottomSheet';
import { SelectionBasic, SelectionTagList } from '@/components/Selection';
import { ICON } from '@/constants/icon';
import useBottomSheet from '@/hooks/useBottomSheet';
import useFilterState from '@/hooks/useFilterState';
import { useEffect, useState } from 'react';

export default function FilterSheet() {
  const { filterState, updateFilterState } = useFilterState();
  const { closeBottomSheet } = useBottomSheet();

  const countList = ['전체', '1인', '2인', '3인', '4인', '5인+'];
  const [countState, setCountState] = useState<number>(0);

  const frameList = ['전체', '1컷', '3컷', '4컷', '6컷', '8컷+'];
  const [frameState, setFrameState] = useState<number>(0);

  const tagList = ['친구', '연인', '유명프레임', '기념일', '소품'];
  const [tagState, setTagState] = useState<string[]>([]);

  function resetFilter() {
    setCountState(0);
    setFrameState(0);
    setTagState([]);
  }

  function decideFilter() {
    updateFilterState(countState, frameState, tagState);
    closeBottomSheet();
  }

  function cancelFilter() {
    setCountState(filterState.peopleCount);
    setFrameState(filterState.frameCount);
    setTagState(filterState.tags.split(','));
  }

  return (
    <>
      <BottomSheet beforeClose={cancelFilter}>
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            인원 수
          </div>
          <SelectionBasic data={countList} state={countState} setState={setCountState} />
        </section>
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            프레임 수
          </div>
          <SelectionBasic data={frameList} state={frameState} setState={setFrameState} />
        </section>
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            태그
          </div>
          <SelectionTagList data={tagList} state={tagState} setState={setTagState} />
        </section>
        <div className="flex gap-8 py-20 [&>*]:flex-1">
          <PrimaryButton
            type="outline"
            icon={ICON.restart}
            text="필터 초기화"
            onClick={resetFilter}
          />
          <PrimaryButton type="fill" text="포즈보기" onClick={decideFilter} />
        </div>
      </BottomSheet>
    </>
  );
}
