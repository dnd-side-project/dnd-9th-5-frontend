import { atom } from 'recoil';

import { PoseDataI } from '@/server/type';

export const cachedPoseFeedAtom = atom<PoseDataI | null>({
  key: 'cachedPoseFeedAtom',
  default: null,
});

export const cachedPoseAtom = atom<PoseDataI | null>({ key: 'cachedPoseAtom', default: null });
