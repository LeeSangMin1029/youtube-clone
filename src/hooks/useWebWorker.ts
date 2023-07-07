import { useEffect, useMemo } from 'react';
import { makeWorkerApiAndCleanup } from '@/utils';

export const useWebWorker = () => {
  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanup(), []);

  useEffect(() => {
    const { cleanup } = workerApiAndCleanup;

    return () => {
      cleanup();
    };
  }, [workerApiAndCleanup]);

  return workerApiAndCleanup;
};
