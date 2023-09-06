import { useEffect, useRef } from 'react';

const useIntersect = (callback: () => void, options?: IntersectionObserverInit) => {
  const target = useRef(null);

  useEffect(() => {
    if (!target.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [callback, options]);

  return target;
};

export default useIntersect;
