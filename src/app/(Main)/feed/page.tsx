'use client';

import Filter from './components/Filter';
import Thumbnails from './components/Thumbnails';

const tmp = [
  44, 203, 250, 7, 136, 44, 105, 193, 122, 270, 232, 213, 243, 35, 244, 73, 271, 109, 30, 76, 11,
  198, 132, 48, 227, 201, 241, 140, 63, 115, 187, 80, 35, 6, 123, 55, 286, 220, 23, 293, 50, 297,
  50, 265, 117, 89, 27, 77, 143, 37, 87, 267, 158, 11, 99, 203, 229, 287, 258, 78, 213, 176, 214,
  11, 11, 141, 290, 258, 223, 109, 125, 217, 267, 288, 0, 274, 270, 34, 274, 219, 49, 137, 27, 2,
  52, 202, 2, 101, 101, 287, 17, 43, 210, 146, 170, 68, 163, 89, 191, 62,
];

export default function Feed() {
  return (
    <>
      <Filter />
      <div className="pt-72">
        <div className="columns-2	overflow-y-scroll">
          {tmp.map((item, idx) => (
            <Thumbnails height={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
