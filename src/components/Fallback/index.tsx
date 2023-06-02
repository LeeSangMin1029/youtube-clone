import { FallbackProps } from '@/components/ErrorBoundarySuspense';

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <p> 에러: {error.message} </p>
      <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
    </div>
  );
};
export default Fallback;
