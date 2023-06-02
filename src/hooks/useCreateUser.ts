import { UserData } from '@/@types/database';
import { useEffect } from 'react';
import { useUserContext } from '@/context/UserContext';
import { useWebWorker } from './useWebWorker';

export const useCreateUser = () => {
  const { setUser } = useUserContext();
  const { workerApi } = useWebWorker();

  useEffect(() => {
    const loginChannel = new BroadcastChannel('login');
    const handleCreateUser = async (e: MessageEvent<UserData>) => {
      const createdUser = e.data;
      setUser({ isLoggedIn: true, ...createdUser });
      await workerApi.addUser(createdUser.googleID, createdUser);
    };
    loginChannel.addEventListener('message', handleCreateUser);
    return () => {
      loginChannel.removeEventListener('message', handleCreateUser);
    };
  }, []);
};
