import { PropsWithChildren } from 'react';

import { MainFooter } from '@/app/(Main)/MainFooter';

interface PopupI extends PropsWithChildren {
  title?: string;
  content?: string;
  onClose?: () => void;
}

export default function Popup({ title, content, children, onClose }: PopupI) {
  return (
    <div className="fixed inset-x-0 inset-y-0 z-modal flex items-center justify-center">
      <div className="fixed inset-x-0 inset-y-0 bg-dimmed opacity-30" onClick={onClose} />
      <div className="z-modal w-300 rounded-16 bg-white p-16 text-center">
        {(title || content) && (
          <div className="mb-16 py-16">
            <h4 className="mb-8">{title}</h4>
            <div>{content}</div>
          </div>
        )}
        <div className="flex gap-8 [&>*]:grow">{children}</div>
      </div>
    </div>
  );
}
