'use client';

import { Icon } from '@/components/common/Button';
import { Tag } from '@/components/common/Selection';
import { useBottomSheet, useFilterState } from '@/hooks';
import cn from '@/utils/cn';

export default function FilterTab() {
  const { openBottomSheet } = useBottomSheet();
  const { selectedFilterItems, deleteSelectedFilterItem } = useFilterState();
  const tags = selectedFilterItems();
  const isFiltered = tags.length !== 0;

  return (
    <div className="flex h-56 items-center gap-8 bg-white px-20">
      <button
        className={cn('flex min-w-fit items-center gap-8 rounded-8 px-16 py-9', {
          'border-1 border-main-violet bg-main-violet-base text-main-violet': isFiltered,
          'bg-sub-white': !isFiltered,
        })}
        onClick={openBottomSheet}
      >
        <h5 id="subtitle-2">필터</h5>
        <Icon icon={isFiltered ? 'carat_down' : 'carat_down_gray'} />
      </button>

      {isFiltered && (
        <>
          <div className="text-divider">|</div>
          <div className="flex gap-8 overflow-x-scroll">
            {tags.map((tag) => (
              <Tag
                key={tag.value}
                text={tag.value}
                onClick={() => deleteSelectedFilterItem(tag)}
                x={true}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
