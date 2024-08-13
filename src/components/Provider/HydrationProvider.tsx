import { Hydrate, QueryClient, dehydrate } from '@tanstack/react-query';
import { cache } from 'react';

import type { StrictPropsWithChildren } from '@/types';
import type { QueryFunction, QueryKey } from '@tanstack/react-query';

type HydrationProviderProps = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  isInfiniteQuery?: boolean;
};

export default async function HydrationProvider({
  children,
  queryKey,
  queryFn,
  isInfiniteQuery = false,
}: StrictPropsWithChildren<HydrationProviderProps>) {
  const getQueryClient = cache(() => new QueryClient());

  const queryClient = getQueryClient();

  if (isInfiniteQuery) await queryClient.prefetchInfiniteQuery(queryKey, queryFn);
  else await queryClient.prefetchQuery(queryKey, queryFn);

  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
