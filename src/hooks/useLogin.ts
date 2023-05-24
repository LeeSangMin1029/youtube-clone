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

export const useLogin = () => {
  const { setUser, setLogged, isLoggedIn, user } = useUserContext();
  useEffect(() => {
    const loginChannel = new BroadcastChannel('login');
    const handleCreateUser = async (e: MessageEvent<UserData>) => {
      const worker = new UserWorker();
      const userData = e.data;
      setUser(userData);
      setLogged(true);
      worker.postMessage({ dispatch: 'addUser', payload: userData });
    };
    const worker = new UserWorker();
    worker.onmessage = (e: MessageEvent<ReceivingData>) => {
      const { status, payload } = e.data;
      if (status === 'failed') return;
      setUser({ ...payload! });
      setLogged(true);
    };
    if (!isLoggedIn) {
      worker.postMessage({ dispatch: 'getUser' });
    }
    loginChannel.onmessage = handleCreateUser;
    return () => {
      loginChannel.removeEventListener('message', handleCreateUser);
      worker.terminate();
    };
  }, []);
  return { isLoggedIn, user };
};
