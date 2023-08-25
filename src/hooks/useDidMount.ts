import { useEffect, useRef } from 'react';

const useDidMount = (callback: VoidFunction) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (didMountRef.current) return;
    didMountRef.current = true;
    callback();
  }, [callback]);
};

export default useDidMount;
