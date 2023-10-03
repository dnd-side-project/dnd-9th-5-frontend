import { QueryAsyncBoundary } from '@suspensive/react-query';
import { useSearchParams } from 'next/navigation';

import LoginSection from './components/LoginSection';
import { getRegister } from '@/apis';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider/HydrationProvider';

interface PageProps {
  searchParams: {
    code: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const { code } = searchParams;

  return (
    <QueryAsyncBoundary
      rejectedFallback={RejectedFallback}
      pendingFallback={<Loading className="h-[calc(100dvh-400px)]" />}
    >
      <HydrationProvider queryKey={['register']} queryFn={() => getRegister(code)}>
        <LoginSection code={code} />
      </HydrationProvider>
    </QueryAsyncBoundary>
  );
}
