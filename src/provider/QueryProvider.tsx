'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  // queryClient.setDefaultOptions({
  //   queries: {
  //     retry: 1,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false,
  //     suspense: true,
  //   },
  // });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
