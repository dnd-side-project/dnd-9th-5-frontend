import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@suspensive/react-query';
import {
  type UseInfiniteQueryOptions,
  type UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import {
  FilterTagsResponse,
  MyposeCountResponse,
  PoseDetailResponse,
  PoseFeedContents,
  PoseFeedResponse,
  PosePickResponse,
  PoseTalkResponse,
  getBookmarkFeed,
  getFilterTag,
  getMyposeCount,
  getPoseDetail,
  getPoseFeed,
  getPosePick,
  getPoseTalk,
} from '.';
import { FilterState } from '@/hooks/useFilterState';

export const usePoseDetailQuery = (
  { poseId }: { poseId: number },
  options?: UseQueryOptions<PoseDetailResponse>
) => useQuery<PoseDetailResponse>(['poseId', poseId], () => getPoseDetail(poseId), { ...options });

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
) => {
  return useSuspenseInfiniteQuery<PoseFeedResponse>(
    ['poseFeed', peopleCount, frameCount, tags],
    ({ pageParam = 0 }) => getPoseFeed(peopleCount, frameCount, tags.join(','), pageParam),
    {
      getNextPageParam: (lastPage) => {
        const target = lastPage.recommendation
          ? lastPage.recommendedContents
          : lastPage.filteredContents;
        return target.last ? undefined : target.number + 1;
      },
      ...options,
    }
  );
};

export const useBookmarkFeedQuery = (options?: UseInfiniteQueryOptions<PoseFeedContents>) =>
  useSuspenseInfiniteQuery<PoseFeedContents>(
    ['bookmarkFeed'],
    ({ pageParam = 0 }) => getBookmarkFeed(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.last ? undefined : lastPage.number + 1;
      },
      ...options,
    }
  );

export const useFilterTagQuery = (options?: UseQueryOptions<FilterTagsResponse>) =>
  useSuspenseQuery<FilterTagsResponse>(['filterTag'], getFilterTag, { ...options });

export const useMyposeCountQuery = (options?: UseQueryOptions<MyposeCountResponse>) =>
  useQuery<MyposeCountResponse>(['myposeCount'], getMyposeCount, { ...options });
