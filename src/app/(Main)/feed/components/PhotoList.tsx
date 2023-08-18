import Thumbnails from './Thumbnails';

export default function PhotoList() {
  return (
    <>
      <div className="columns-2	overflow-y-scroll">
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
      </div>
    </>
  );
}
