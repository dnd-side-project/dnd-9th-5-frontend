'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Tag } from '@/components/common/Selection';

interface TagButtonProps {
  type?: 'people' | 'frame' | 'tag';
  value?: number;
  name: string;
}

export default function TagButton({ type = 'tag', value, name }: TagButtonProps) {
  const router = useRouter();

  const handleTag = () => {
    // const searchParams = new URLSearchParams();
    // if (type === 'people') {
    //   searchParams.append('people', (value ? (value > 5 ? 5 : value) : 0).toString());
    // } else if (type === 'frame') {
    //   searchParams.append('cut', (value ? (value > 8 ? 8 : value) : 0).toString());
    // } else {
    //   searchParams.append('tags', new Array(name).join(','));
    // }
    // router.push(`/feed?${searchParams.toString()}`);
  };

  return (
    <Link href="/feed" type="button" scroll={false} onClick={handleTag}>
      <Tag text={name} />
    </Link>
  );
}
