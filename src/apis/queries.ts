import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import {
  type PosePickResponse,
  type PoseTalkResponse,
  getPoseDetail,
  getPosePick,
  getPoseTalk,
  PoseFeedResponse,
  getPoseFeed,
  PoseFeedParameter,
} from '.';

export const usePoseDetailQuery = (poseId: number) =>
  useQuery(['poseId', poseId], () => getPoseDetail(poseId));

export const usePosePickQuery = (
  peopleCount: number,
  options?: UseQueryOptions<PosePickResponse>
) =>
  useQuery<PosePickResponse>(['posePick', peopleCount], () => getPosePick(peopleCount), {
    enabled: false,
    ...options,
  });

export const usePoseTalkQuery = (options?: UseQueryOptions<PoseTalkResponse>) =>
  useQuery<PoseTalkResponse>(['poseTalk'], getPoseTalk, { enabled: false, ...options });

export const usePoseFeedQuery = (
  props: PoseFeedParameter,
  options?: UseQueryOptions<PoseFeedResponse>
) =>
  useQuery<PoseFeedResponse>(['poseFeed', props], () => getPoseFeed(props), {
    ...options,
  });
