'use client';

import { AnimatePresence } from 'framer-motion';
import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { isProduction } from '@/utils/isProduction';

export const OverlayContext = createContext<{
  mount(id: string, element: ReactNode): void;
  unmount(id: string): void;
} | null>(null);
if (!isProduction) {
  OverlayContext.displayName = 'OverlayContext';
}

export function OverlayProvider({ children }: PropsWithChildren) {
  const [overlayById, setOverlayById] = useState<Map<string, ReactNode>>(new Map());

  const mount = useCallback((id: string, element: ReactNode) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.set(id, element);
      return cloned;
    });
  }, []);

  const unmount = useCallback((id: string) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const context = useMemo(() => ({ mount, unmount }), [mount, unmount]);

  return (
    <OverlayContext.Provider value={context}>
      {children}
      <AnimatePresence>
        {Array.from(overlayById.entries()).map(([id, element]) => (
          <React.Fragment key={id}>{element}</React.Fragment>
        ))}
      </AnimatePresence>
    </OverlayContext.Provider>
  );
}
