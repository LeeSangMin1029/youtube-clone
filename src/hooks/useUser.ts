import { useEffect } from 'react';
import { WebWorkerAction } from '@/@types/dispatch';
import { UserData } from '@/@types/database';
import { useUserContext } from '@/context/UserContext';
import { UserWorker } from '@/utils';

type ReceivingData = {
  payload?: UserData;
  status: string;
  dispatch: WebWorkerAction;
};

export const useUser = () => {
  const { user, setUser, setLogged, isLoggedIn } = useUserContext();

  useEffect(() => {
    const worker = new UserWorker();
    worker.postMessage({ dispatch: 'getUser' });
    worker.onmessage = (e: MessageEvent<ReceivingData>) => {
      const { status, payload } = e.data;
      if (status === 'failed') return;
      setLogged(true);
      setUser({ ...payload! });
    };
  }, []);

  return { user, setUser, isLoggedIn };
};
