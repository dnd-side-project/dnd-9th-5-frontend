import FilterSheet from './FilterSheet';
import PoseFeedPage from '../../components/pages/PoseFeedPage';
import { PoseFeedFilterTab } from '@/components/Layout/Header';
import MainLayout from '@/components/Layout/MainLayout';
import { getPoseFeed } from '@/server/api';

interface Props {
  searchParams: { people?: string; cut?: string; tags?: string };
}

export interface FilterStateI {
  people: number;
  cut: number;
  tags: string[];
}

export default async function Page({ searchParams }: Props) {
  const { people, cut, tags } = searchParams;

  const filterState: FilterStateI = {
    people: people ? parseInt(people) : 0,
    cut: cut ? parseInt(cut) : 0,
    tags: tags ? tags.split(',') : [],
  };

  const data = (await getPoseFeed(filterState, null)).data;

  return (
    <MainLayout
      subHeader={{ children: <PoseFeedFilterTab filterState={filterState} />, height: 56 }}
    >
      <PoseFeedPage filterState={filterState} initialData={data} />
      <FilterSheet filterState={filterState} />
    </MainLayout>
  );
}
