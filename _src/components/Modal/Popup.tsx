import { PropsWithChildren } from 'react';


interface PopupI extends PropsWithChildren {
  title?: string;
  content?: string;
  onClose?: () => void;
}

export default function Popup({ title, content, children, onClose }: PopupI) {
  return (
    <div className="fixed inset-x-0 inset-y-0 flex items-center justify-center z-modal">
      <div className="fixed inset-x-0 inset-y-0 bg-dimmed opacity-30" onClick={onClose} />
      <div className="p-16 text-center bg-white z-modal w-300 rounded-16">
        {(title || content) && (
          <div className="py-16 mb-16">
            <h4 className="mb-8">{title}</h4>
            <div>{content}</div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
