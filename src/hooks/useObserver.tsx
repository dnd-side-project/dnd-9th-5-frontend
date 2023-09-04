import { useEffect } from 'react';

interface UseObserver extends IntersectionObserverInit {
  target: any;
  onIntersect: () => void;
}

export default function useObserver({
  target,
  root,
  rootMargin = '0px',
  threshold = 1.0,
  onIntersect,
}: UseObserver) {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && target.current) {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
        { root, rootMargin, threshold }
      );
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold]);
}
