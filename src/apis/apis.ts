import { useQuery } from '@tanstack/react-query';

import publicApi from './config/publicApi';

export const getPoseTalk = () => publicApi.get('/pose/talk');
export const usePoseTalkQuery = () =>
  useQuery(['poseTalk'], getPoseTalk, {
    enabled: false,
  });

export const getPoseDetail = (poseId: number) => publicApi.get(`/pose/${poseId}`);
export const usePoseDetailQuery = (poseId: number) =>
  useQuery(['poseId', poseId], () => getPoseDetail(poseId));

export const getPosePick = (peopleCount: number) => publicApi.get(`/pose/pick/${peopleCount}`);
export const usePosePickQuery = (peopleCount: number) =>
  useQuery(['posePick', peopleCount], () => getPosePick(peopleCount), {
    enabled: false,
  });
