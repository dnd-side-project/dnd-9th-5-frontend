'use client';

import Filter from './components/Filter';
import Thumbnails from './components/Thumbnails';

const tmp = [34, 69, 195, 203, 273, 166, 220, 145, 259, 30];

export default function Feed() {
  return (
    <>
      <Filter />
      <div className="pt-72">
        <div className="wow">
          {tmp.map((item) => (
            <Thumbnails height={item} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .wow {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: masonry;
            overflow-y: scroll;
          }
        `}
      </style>
    </>
  );
}
