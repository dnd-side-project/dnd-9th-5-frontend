'use client';

interface RejectedFallbackProps {
  error: Error;
  reset?: () => void;
  resetErrorBoundary?: () => void;
}

export default function RejectedFallback({
  error,
  reset,
  resetErrorBoundary,
}: RejectedFallbackProps) {
  return (
    <div className="flex flex-col items-center px-24 py-40">
      <p className="text-h5 text-black">문제가 발생했습니다</p>
      <p className="text-b3 text-grey-600 mt-2">페이지를 불러오는데 실패했습니다.</p>
      <p>{error.message}</p>
      <button
        className="bg-grey-200 text-grey-800 mt-16 rounded-lg px-12 py-8 text-13 font-bold"
        onClick={reset || resetErrorBoundary}
      >
        다시 불러오기
      </button>
    </div>
  );
}
