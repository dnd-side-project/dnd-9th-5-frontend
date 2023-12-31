import { useCallback, useEffect, useState } from 'react';

import useIsMounted from './useIsMounted';

interface UseLoadingProps {
  initialState?: boolean;
  loadingDelay?: number;
  isFirstLoadingInfinite?: boolean;
}
export default function useLoading({
  initialState = true,
  loadingDelay,
  isFirstLoadingInfinite = false,
}: UseLoadingProps = {}) {
  const [isLoading, setIsLoading] = useState(initialState);
  const isMounted = useIsMounted();

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    if (loadingDelay) {
      setTimeout(stopLoading, loadingDelay);
    }
  }, [loadingDelay, stopLoading]);

  useEffect(() => {
    if (isMounted && !isFirstLoadingInfinite && loadingDelay) {
      const timer = setTimeout(stopLoading, loadingDelay);
      return () => clearTimeout(timer);
    }
  }, [isMounted, isFirstLoadingInfinite, loadingDelay, stopLoading]);

  return { isLoading, stopLoading, startLoading };
}
