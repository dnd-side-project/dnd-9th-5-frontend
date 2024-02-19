import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@suspensive/react-query';
import {
  type UseInfiniteQueryOptions,
  type UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import {
  FilterTagsResponse,
  PoseFeedResponse,
  PosePickResponse,
  PoseTalkResponse,
  RegisterResponse,
  getFilterTag,
  getPoseDetail,
  getPoseFeed,
  getPosePick,
  getPoseTalk,
  getRegister,
} from '.';
import { FilterState } from '@/hooks/useFilterState';

export const usePoseDetailQuery = (poseId: number) =>
  useQuery(['poseId', poseId], () => getPoseDetail(poseId));

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

export const useFilterTagQuery = (options?: UseQueryOptions<FilterTagsResponse>) =>
  useSuspenseQuery<FilterTagsResponse>(['filterTag'], getFilterTag, { ...options });

// export const useRegisterQuery = (code: string) =>
//   useQuery<RegisterResponse>(['register'], () => getRegister(code));
