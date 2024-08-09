import { useEffect, useRef } from 'react';

import { isMobileWeb } from '@/utils';

export default function useLaunchApp() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handler() {
      if (!timerRef.current) return;
      clearTimeout(timerRef.current);
    }
    window.addEventListener('visibilitychange', handler);
  }, []);

  const launchApp = (baseUrl: string, deepLinkUrl?: string) => {
    if (!isMobileWeb()) {
      window.open(baseUrl);
      return;
    }
    location.href = deepLinkUrl ?? baseUrl;

    timerRef.current = setTimeout(() => {
      alert('Instagram 앱이 설치되지 않았습니다. 앱을 먼저 설치해주세요.');
    }, 2000);
  };

  return { launchApp };
}
