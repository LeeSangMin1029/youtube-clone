import { useEffect } from 'react';
import { UserData } from '@/@types/database';
import { useUserContext } from '@/context/UserContext';
import { UserWorker } from '@/utils';

export const useLogin = () => {
  const { setUser, setLogged } = useUserContext();
  useEffect(() => {
    const loginChannel = new BroadcastChannel('login');
    loginChannel.onmessage = async (e: MessageEvent<UserData>) => {
      const worker = new UserWorker();
      const userData = e.data;
      setUser(userData);
      setLogged(true);
      worker.postMessage({ dispatch: 'addUser', payload: userData });
    };
  }, []);
};
