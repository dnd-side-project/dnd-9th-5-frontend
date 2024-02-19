// import { QueryAsyncBoundary } from '@suspensive/react-query';

// import LoginSection from './components/LoginSection';
// import { getRegister } from '@/apis';
// import { RejectedFallback } from '@/components/ErrorBoundary';
// import { Loading } from '@/components/Loading';
// import { HydrationProvider } from '@/components/Provider/HydrationProvider';

interface PageProps {
  searchParams: {
    code: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const { code } = searchParams;
  console.log('🚀 ~ Page ~ code:', code);

  return (
    <>asdf</>
    // <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
    //   <HydrationProvider queryKey={['register']} queryFn={() => getRegister(code)}>
    //     <LoginSection code={code} />
    //   </HydrationProvider>
    // </QueryAsyncBoundary>
  );
}
