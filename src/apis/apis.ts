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
    frame_count: number;
    image_key: string;
    people_count: number;
    pose_id: number;
    pose_source: string;
  };
}

export const getPosePick = (peopleCount: number) =>
  publicApi.get<PosePickResponse>(`/pose/pick/${peopleCount}`);

export const usePosePickQuery = (
  peopleCount: number,
  options?: UseQueryOptions<PosePickResponse>
) => useQuery<PosePickResponse>(['posePick', peopleCount], () => getPosePick(peopleCount), options);
