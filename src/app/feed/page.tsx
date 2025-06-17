import FilterSheet from './FilterSheet';
import PoseFeedPage from './PoseFeedPage';
import MainLayout from '@/components/Layout/MainLayout';
import PoseFeedFilterTab from '@/components/Layout/PoseFeedFilterTab';

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
    <MainLayout
      subHeader={{ children: <PoseFeedFilterTab filterState={filterState} />, height: 56 }}
    >
      <PoseFeedPage filterState={filterState} />
      <FilterSheet filterState={filterState} />
    </MainLayout>
  );
}
