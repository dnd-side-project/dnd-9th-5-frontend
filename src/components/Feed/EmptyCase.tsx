import { PropsWithChildren } from 'react';

import { Spacing } from '@/components/Spacing';

interface EmptyCase extends PropsWithChildren {
  title: string;
  text: string;
}

export default function EmptyCase({ title, text, children }: EmptyCase) {
  return (
    <div className="py-80 text-center">
      <h4 className="text-secondary">{title}</h4>
      <Spacing size={8} />
      <p className="text-tertiary">{text}</p>
      <Spacing size={32} />
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
