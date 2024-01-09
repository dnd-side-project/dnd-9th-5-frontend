interface Source {
  source: string;
  url: string;
}

export default function Source({ source, url }: Source) {
  return (
    <div className="flex h-60 items-center px-19">
      <button
        className="rounded-8 bg-divider px-12 py-5 text-main-violet"
        onClick={() => window.open('https://' + url)}
      >
        {source} ↗
      </button>
    </div>
  );
}
