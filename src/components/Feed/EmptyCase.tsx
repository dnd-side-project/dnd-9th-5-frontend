import Link from 'next/link';

import { PrimaryButton } from '@/components/Button';
import { Spacing } from '@/components/Spacing';

interface EmptyCase {
  title: string;
  text: string;
  button: string;
  path: string;
}

export default function EmptyCase(props: EmptyCase) {
  const { title, text, button, path } = props;

  return (
    <div className="py-80 text-center">
      <h4 className="text-secondary">{title}</h4>
      <Spacing size={8} />
      <p className="text-tertiary">{text}</p>
      <Spacing size={32} />
      <div className="flex justify-center">
        <Link href={path}>
          <PrimaryButton text={button} type="secondary" />
        </Link>
      </div>
    </div>
  );
}
