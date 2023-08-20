import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import publicApi from './config/publicApi';

export const getPoseTalk = () => publicApi.get('/pose/talk');
export const usePoseTalkQuery = () =>
  useQuery(['poseTalk'], getPoseTalk, {
    enabled: false,
  });

export const getPoseDetail = (poseId: number) => publicApi.get(`/pose/${poseId}`);
export const usePoseDetailQuery = (poseId: number) =>
  useQuery(['poseId', poseId], () => getPoseDetail(poseId));

export interface PosePickResponse {
  poseInfo: {
    createdAt: string;
    frameCount: number;
    imageKey: string;
    peopleCount: number;
    poseId: number;
    source: string;
    sourceUrl: string;
    tagAttributes: string;
    updatedAt: string;
  };
}

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const usePosePickQuery = (
  peopleCount: number,
  options?: UseQueryOptions<PosePickResponse>
) => useQuery<PosePickResponse>(['posePick', peopleCount], () => getPosePick(peopleCount), options);
