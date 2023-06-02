import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
export type { FallbackProps } from 'react-error-boundary';

type ErrorBoundarySuspenseProps = {
  children: React.ReactNode;
  Fallback: ({ error, resetErrorBoundary }: FallbackProps) => JSX.Element;
  Loading: React.ReactNode;
};

const ErrorBoundarySuspense = ({
  children,
  Fallback,
  Loading,
}: ErrorBoundarySuspenseProps) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback={Loading}>{children}</Suspense>
    </ErrorBoundary>
  );
};
export default ErrorBoundarySuspense;
