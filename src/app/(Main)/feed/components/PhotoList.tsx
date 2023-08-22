import Photo from './Photo';

export default function PhotoList() {
  return (
    <>
      <div className="columns-2	overflow-y-scroll">
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    </>
  );
}
