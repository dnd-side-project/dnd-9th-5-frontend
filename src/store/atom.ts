import { atom, selector } from 'recoil';

import { FilterStateI } from '@/app/feed/page';
import { PoseDataI, PoseFeedResponseI } from '@/server/type';

export const poseFeedAtom = atom<{
  filterState: FilterStateI | undefined;
  selectedIdx: number;
  feedData: PoseFeedResponseI;
} | null>({
  key: 'cachedPoseFeedAtom',
  default: null,
});

export const poseDetailSelector = selector({
  key: 'poseSelector',
  get: ({ get }) => {
    const feed = get(poseFeedAtom);
    if (!feed) return null;
    return feed.feedData.contents[feed.selectedIdx];
  },
});
