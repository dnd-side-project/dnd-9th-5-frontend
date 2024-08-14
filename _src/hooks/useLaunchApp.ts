import { useEffect, useRef } from 'react';

import { isMobileWeb } from '@/utils';

export default function useLaunchApp() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => {
      if (!timerRef.current) return;
      clearTimeout(timerRef.current);
    };

    window.addEventListener('visibilitychange', handler);
  }, []);

  const launchApp = (baseUrl: string, deepLinkUrl?: string) => {
    if (!isMobileWeb()) {
      window.open(baseUrl);
      return;
    }

    location.href = deepLinkUrl ?? baseUrl;

    timerRef.current = setTimeout(() => {
      window.open(baseUrl);
    }, 2000);
  };

  return { launchApp };
}
