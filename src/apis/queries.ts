import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@suspensive/react-query';
import {
  type UseInfiniteQueryOptions,
  type UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import {
  FilterTagsResponse,
  MyposeCountResponse,
  PoseFeedContents,
  getBookmarkFeed,
  getFilterTag,
  getMyposeCount,
} from '.';

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
