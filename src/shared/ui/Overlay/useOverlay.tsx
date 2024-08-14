'use client';

import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { OverlayControlRef, OverlayController } from './OverlayController';
import OverlayContext from './OverlayProvider';
import { CreateOverlayElement } from './type';

let elementId = 1;

interface Options {
  exitOnUnmount?: boolean;
  delay?: number;
}

export default function useOverlay({ exitOnUnmount = true, delay }: Options = {}) {
  const context = useContext(OverlayContext);

  if (context == null) {
    throw new Error('useOverlay is only available within OverlayProvider.');
  }

  const { mount, unmount } = context;
  const [id] = useState(() => String(elementId++));

  const overlayRef = useRef<OverlayControlRef | null>(null);

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return useMemo(
    () => ({
      open: (overlayElement: CreateOverlayElement) => {
        mount(
          id,
          <OverlayController
            key={Date.now()}
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => {
              unmount(id);
            }}
          />
        );
        if (!delay) return;
        const timer = setTimeout(() => {
          unmount(id);
        }, delay);
        return () => clearTimeout(timer);
      },
      close: () => {
        overlayRef.current?.close();
      },
      exit: () => {
        unmount(id);
      },
    }),
    [delay, id, mount, unmount]
  );
}
