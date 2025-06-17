import FilterSheet from './FilterSheet';
import PoseFeedPage from '../../components/pages/PoseFeedPage';
import MainLayout from '@/components/Layout/MainLayout';
import PoseFeedFilterTab from '@/components/Layout/PoseFeedFilterTab.client';
import { getPoseFeed } from '@/server/api';

interface Props {
  searchParams: { people?: string; cut?: string };
}

export interface FilterStateI {
  people: number;
  cut: number;
}

export default async function Feed({ searchParams }: Props) {
  const { people, cut } = searchParams;

  const filterState: FilterStateI = {
    people: people ? parseInt(people) : 0,
    cut: cut ? parseInt(cut) : 0,
  };

  const data = (await getPoseFeed(filterState.people, filterState.cut, [].join(','))).data;

  return (
    <MainLayout
      subHeader={{ children: <PoseFeedFilterTab filterState={filterState} />, height: 56 }}
    >
      <PoseFeedPage filterState={filterState} initialData={data} />
      <FilterSheet filterState={filterState} />
    </MainLayout>
  );
}
