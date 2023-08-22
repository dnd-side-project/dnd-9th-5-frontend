'use client';

import EmptyCase from './components/EmptyCase';
import Filter from './components/Filter';
import FilterSheet from './components/FilterSheet';
import PhotoList from './components/PhotoList';

export default function Feed() {
  return (
    <>
      <Filter />
      <div className="pt-72">
        <EmptyCase
          title={'신비한 포즈를 찾으시는군요!'}
          text={'찾고 싶은 포즈를 저희에게 알려주세요.'}
          button={'문의사항 남기기'}
          path={''}
        />
        <PhotoList />
      </div>
      <FilterSheet />
    </>
  );
}
