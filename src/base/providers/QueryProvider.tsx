'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import { StrictPropsWithChildren } from '@/shared';

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  queryClient.setDefaultOptions({
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
