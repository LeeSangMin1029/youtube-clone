import { wrap, releaseProxy } from 'comlink';

export const makeWorkerApiAndCleanup = () => {
  const url = new URL('worker/index.ts', import.meta.url.replace('/utils', ''));
  const worker = new Worker(url, {
    name: 'react-web-worker',
    type: 'module',
  });
  const workerApi = wrap<import('@/worker').ReactWebWorker>(worker);
  const cleanup = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };
  const workerApiAndCleanup = { workerApi, cleanup };
  return workerApiAndCleanup;
};
