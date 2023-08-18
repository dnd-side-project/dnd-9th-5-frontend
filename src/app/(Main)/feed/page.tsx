'use client';

import Filter from './components/Filter';
import FilterSheet from './components/FilterSheet';
import PhotoList from './components/PhotoList';

export default function Feed() {
  return (
    <>
      <Filter />
      <div className="pt-72">
        <PhotoList />
      </div>
      <FilterSheet />
    </>
  );
}
