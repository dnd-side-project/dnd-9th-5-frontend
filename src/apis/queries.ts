import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@suspensive/react-query';

import {
  FilterTagsResponse,
  PoseFeedResponse,
  PosePickResponse,
  PoseTalkResponse,
  getFilterTag,
  getPoseDetail,
  getPoseFeed,
  getPosePick,
  getPoseTalk,
} from '.';
import { FilterState } from '@/hooks/useFilterState';

import type { UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/react-query';

export const usePoseDetailQuery = (poseId: number) =>
  useSuspenseQuery(['poseId', poseId], () => getPoseDetail(poseId));

export const usePosePickQuery = (
  peopleCount: number,
  options?: UseQueryOptions<PosePickResponse>
) =>
  useSuspenseQuery<PosePickResponse>(['posePick', peopleCount], () => getPosePick(peopleCount), {
    enabled: false,
    ...options,
  });

export const usePoseTalkQuery = (options?: UseQueryOptions<PoseTalkResponse>) =>
  useSuspenseQuery<PoseTalkResponse>(['poseTalk'], getPoseTalk, { enabled: false, ...options });

export const usePoseFeedQuery = (
  { peopleCount, frameCount, tags }: FilterState,
  options?: UseInfiniteQueryOptions<PoseFeedResponse>
) =>
  useSuspenseInfiniteQuery<PoseFeedResponse>(
    ['poseFeed', peopleCount, frameCount, tags],
    ({ pageParam = '' }) => getPoseFeed(peopleCount, frameCount, tags.join(','), pageParam),
    {
      getNextPageParam: (lastPage) => {
        let target = lastPage.filteredContents;
        if (lastPage.recommendation) {
          target = lastPage.recommendedContents;
        } else {
          target = lastPage.filteredContents;
        }
        if (target.last) return false;
        return target.number + 1;
      },
      ...options,
    }
  );

export const useFilterTagQuery = (options?: UseQueryOptions<FilterTagsResponse>) =>
  useSuspenseQuery<FilterTagsResponse>(['filterTag'], getFilterTag, { ...options });
