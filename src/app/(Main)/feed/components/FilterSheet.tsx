import { PrimaryButton } from '@/components/Button';
import BottomSheet from '@/components/Modal/BottomSheet';
import { SelectionBasic, SelectionTag } from '@/components/Selection';
import { ICON } from '@/constants/icon';
import { useState } from 'react';

export default function FilterSheet() {
  const countList = ['전체', '1인', '2인', '3인', '4인', '5인+'];
  const [countState, setCountState] = useState<string>(countList[0]);

  const frameList = ['전체', '1컷', '3컷', '4컷', '6컷', '8컷+'];
  const [frameState, setFrameState] = useState<string>(frameList[0]);

  const tagList = ['친구', '연인', '유명프레임', '기념일', '소품'];
  const [tagState, setTagState] = useState<string[]>([]);

  function resetFilter() {
    setCountState(countList[0]);
    setFrameState(frameList[0]);
    setTagState([]);
  }

  return (
    <>
      <BottomSheet>
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
          <SelectionTag data={tagList} state={tagState} setState={setTagState} />
        </section>
        <div className="flex gap-8 py-20 [&>*]:flex-1">
          <PrimaryButton
            type="outline"
            icon={ICON.restart}
            text="필터 초기화"
            onClick={resetFilter}
          />
          <PrimaryButton type="fill" text="포즈보기" onClick={() => console.log('포즈보기')} />
        </div>
      </BottomSheet>
    </>
  );
}
