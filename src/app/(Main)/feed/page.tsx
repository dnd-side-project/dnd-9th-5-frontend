'use client';

import Filter from './components/Filter';
import Thumbnails from './components/Thumbnails';
import FilterSheet from './components/FilterSheet';

export default function Feed() {
  return (
    <>
      <Filter />
      <div className="pt-72">
        <div className="columns-2	overflow-y-scroll bg-black">
          <Thumbnails />
          <Thumbnails />
          <Thumbnails />
          <Thumbnails />
          <Thumbnails />
          <Thumbnails />
          <Thumbnails />
        </div>
      </div>
      <FilterSheet />
    </>
  );
}
