import { useState, useEffect } from 'react';

export const usePromise = <I, T>(promise: () => Promise<T>) => {
  const [suspender, setPromise] = useState<Promise<void>>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'error'>(
    'pending',
  );
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();

  function resolvePromise(res: T) {
    setStatus('fulfilled');
    setResult(res);
  }
  function rejectPromise(err: Error) {
    setStatus('error');
    setError(err);
  }

  useEffect(() => {
    setStatus('pending');
    setPromise(promise().then(resolvePromise, rejectPromise));
  }, []);

  if (status === 'pending' && suspender) throw suspender;
  if (error) throw error;
  return result;
};
