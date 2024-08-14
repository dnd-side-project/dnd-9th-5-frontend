import Link from 'next/link';

import Tag from '@/components/Selection/Tag';
import { useFilterState } from '@/hooks';

interface TagButtonProps {
  type?: 'people' | 'frame' | 'tag';
  value?: number;
  name: string;
}

export default function TagButton({ type = 'tag', value, name }: TagButtonProps) {
  const { updateFilterState } = useFilterState();
  const handleTag = () => {
    let filterState;
    if (type === 'people') {
      filterState = {
        tags: [],
        frameCount: 0,
        peopleCount: value ? (value > 5 ? 5 : value) : 0,
      };
    } else if (type === 'frame') {
      filterState = {
        tags: [],
        frameCount: value ? (value > 8 ? 8 : value) : 0,
        peopleCount: 0,
      };
    } else {
      filterState = {
        tags: new Array(name),
        frameCount: 0,
        peopleCount: 0,
      };
    }
    updateFilterState(filterState);
  };

  return (
    <Link href="/feed" type="button" scroll={false} onClick={handleTag}>
      <Tag text={name} />
    </Link>
  );
}
