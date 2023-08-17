import { PrimaryButton } from '@/components/Button';
import { SelectionBasic, SelectionTag } from '@/components/Selection';
import { ICON } from '@/constants/icon';
import Image from 'next/image';
import { useState } from 'react';

export default function BottomSheet() {
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
      <div className="fixed inset-x-0 inset-y-0 bg-dimmed opacity-30" />
      <div className="fixed inset-x-0 bottom-0 rounded-t-16 bg-white">
        <div className="flex justify-end px-8 pt-12">
          <button className="p-12" onClick={() => console.log('close')}>
            <Image src={ICON.close} width={24} height={24} alt={'x'} />
          </button>
        </div>
        <div className="column flex flex-col gap-20 p-20">
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
        </div>
        <div className="flex gap-8 p-20 [&>*]:flex-1">
          <PrimaryButton
            type="outline"
            icon={ICON.restart}
            text="필터 초기화"
            onClick={resetFilter}
          />
          <PrimaryButton type="fill" text="포즈보기" onClick={() => console.log('포즈보기')} />
        </div>
      </div>
    </>
  );
}
