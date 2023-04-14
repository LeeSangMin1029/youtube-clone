import { ReactNode, Suspense } from 'react';

type LoadingProps = {
  children: ReactNode;
};

const Loading = ({ children }: LoadingProps) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};
export default Loading;
