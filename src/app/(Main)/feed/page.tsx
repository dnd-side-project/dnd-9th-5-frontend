import PoseFeedFilterTab from '@/components/Layout/PoseFeedFilterTab';
import FilterSheet from './FilterSheet';
import PoseFeedPage from './PoseFeedPage';

interface Props {
  searchParams: { people?: string; cut?: string };
}

export interface FilterStateI {
  people: number;
  cut: number;
}

export default function Feed({ searchParams }: Props) {
  const { people, cut } = searchParams;

  const filterState: FilterStateI = {
    people: people ? parseInt(people) : 0,
    cut: cut ? parseInt(cut) : 0,
  };

  return (
    <>
      <PoseFeedFilterTab />
      <PoseFeedPage filterState={filterState} />
      <FilterSheet filterState={filterState} />
    </>
  );
}
