import { useCallback, useState } from 'react';

import useIsMounted from './useIsMounted';

interface UseLoadingProps {
  initialState?: boolean;
  loadingDelay?: number;
  onStopLoading?: () => void;
}
export default function useLoading({
  initialState = true,
  loadingDelay,
  onStopLoading,
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
    if (loadingDelay) {
      setTimeout(() => {
        stopLoading();
        onStopLoading && onStopLoading();
      }, loadingDelay);
    }
  }

  return { isLoading, stopLoading, startLoading };
}
