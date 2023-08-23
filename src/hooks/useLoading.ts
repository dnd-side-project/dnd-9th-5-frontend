import { useCallback, useState } from 'react';

import useIsMounted from './useIsMounted';

interface UseLoadingProps {
  initialState?: boolean;
  loadingDelay?: number;
  onStopLoading?: () => void;
  isFirstLoadingInfinite?: boolean;
}
export default function useLoading({
  initialState = true,
  loadingDelay,
  onStopLoading,
  isFirstLoadingInfinite = false,
}: UseLoadingProps = {}) {
  const [isLoading, setIsLoading] = useState(initialState ?? false);
  const isMounted = useIsMounted();

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const startLoading = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      stopLoading();
    }, loadingDelay);
  }, [loadingDelay, stopLoading]);

  if (isMounted) {
    if (!isFirstLoadingInfinite) {
      setTimeout(() => {
        stopLoading();
        onStopLoading && onStopLoading();
      }, loadingDelay);
    }
  }

  return { isLoading, stopLoading, startLoading };
}
