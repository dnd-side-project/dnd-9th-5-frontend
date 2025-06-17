'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { FilterStateI } from './page';
import { FilterTagsResponse } from '@/apis';
import PrimaryButton from '@/components/common/Button';
import { SelectionBasic } from '@/components/common/Selection';
import BottomSheet from '@/components/Modal/BottomSheet';
import { FRAME_COUNT_LIST, PEOPLE_COUNT_LIST } from '@/constants';
import { useBottomSheet } from '@/hooks';

interface FilterSheetI {
  filterState: FilterStateI;
}

export default function FilterSheet({ filterState }: FilterSheetI) {
  const router = useRouter();

  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  const [countState, setCountState] = useState<number>(filterState.people);
  const [frameState, setFrameState] = useState<number>(filterState.cut);

  function resetFilter() {
    setCountState(0);
    setFrameState(0);
  }

  function decideFilter() {
    const params = new URLSearchParams({
      people: countState.toString(),
      cut: frameState.toString(),
    });
    const queryString = params.toString();
    router.replace(`/feed?${queryString}`);
    closeBottomSheet();
  }

  useEffect(() => {
    setCountState(filterState.people);
    setFrameState(filterState.cut);
  }, [isBottomSheetOpen, filterState]);

  function refineTagListData(tagListData: FilterTagsResponse) {
    const tagList: string[] = [];
    for (const tag of tagListData.poseTagAttributes) {
      tagList.push(tag.attribute);
    }
    return tagList;
  }

  return (
    <BottomSheet>
      <div className="flex flex-col gap-20 px-20 pb-32">
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            인원 수
          </div>
          <SelectionBasic data={PEOPLE_COUNT_LIST} state={countState} setState={setCountState} />
        </section>
        <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            프레임 수
          </div>
          <SelectionBasic data={FRAME_COUNT_LIST} state={frameState} setState={setFrameState} />
        </section>
        {/* <section>
          <div id="subtitle-2" className="mb-8 text-secondary">
            태그
          </div>
          {tagListData && (
            <SelectionTagList
              data={refineTagListData(tagListData)}
              state={tagState}
              setState={setTagState}
            />
          )}
        </section> */}
      </div>
      <div className="flex gap-8 px-20 pb-20">
        <PrimaryButton
          className="flex-1"
          variant="outline"
          icon="restart"
          text="필터 초기화"
          onClick={resetFilter}
        />
        <PrimaryButton className="flex-1" variant="fill" text="포즈보기" onClick={decideFilter} />
      </div>
    </BottomSheet>
  );
}
