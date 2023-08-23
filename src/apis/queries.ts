import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import {
  type PosePickResponse,
  type PoseTalkResponse,
  FilterTagsResponse,
  getFilterTag,
  getPoseDetail,
  getPosePick,
  getPoseTalk,
  getPoseFeed,
  PoseFeedResponse,
} from '.';
import { FilterState } from '@/hooks/useFilterState';

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
  { peopleCount, frameCount, tags }: FilterState,
  options?: UseQueryOptions<PoseFeedResponse>
) =>
  useQuery<PoseFeedResponse>(
    ['poseFeed', peopleCount, frameCount, tags],
    () => getPoseFeed(peopleCount, frameCount, tags.join(',')),
    {
      ...options,
    }
  );

export const useFilterTagQuery = (options?: UseQueryOptions<FilterTagsResponse>) =>
  useQuery<FilterTagsResponse>(['filterTag'], () => getFilterTag(), { ...options });
