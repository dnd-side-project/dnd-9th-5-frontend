'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import useIsMounted from '@/hooks/useIsMounted';

export interface PortalProps {
  children: any; // FIXME: any
  documentId?: string;
}

const findWrapperElement = (documentId: string): Element | null => {
  const wrapper = document.getElementById(documentId);
  if (wrapper) {
    return wrapper;
  } else {
    console.warn(`Element with ID '${documentId}'가 root layout에 없어요....추가해주세요.`);
    return null;
  }
};

export default function Portal({ documentId, children }: PortalProps) {
  const ref = useRef<Element | null>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (documentId) {
      const wrapper = findWrapperElement(documentId);
      ref.current = wrapper;
    } else {
      ref.current = findWrapperElement('portal');
    }
  }, [isMounted, documentId]);

  if (!(isMounted && ref.current)) return null;

  return createPortal(children, ref.current);
}
