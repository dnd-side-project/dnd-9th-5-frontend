export default function Thumbnails({ height }: { height: number }) {
  return <div className={`bg-sub-white h-${height} w-full rounded-8`}>{height}</div>;
}
