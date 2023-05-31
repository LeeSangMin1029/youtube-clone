import { UserData } from '@/@types/database';
import { useWebWorker } from './useWebWorker';
import { useUserContext } from '@/context/UserContext';
import { useEffect, useState } from 'react';

export const useLogin = () => {
  const { user, setUser } = useUserContext();
  const [isLoaded, setLoaded] = useState<boolean | null>(null);
  const { workerApi } = useWebWorker();

  useEffect(() => {
    const loginChannel = new BroadcastChannel('login');
    const handleCreateUser = async (e: MessageEvent<UserData>) => {
      const createdUser = e.data;
      setUser({ isLoggedIn: true, ...createdUser });
      await workerApi.addUser(createdUser.googleID, createdUser);
      setLoaded(true);
    };
    const login = async () => {
      const dbUser = await workerApi.getUser();
      if (dbUser) setUser({ isLoggedIn: true, ...dbUser });
      setLoaded(true);
    };
    if (!user.isLoggedIn) login();

    loginChannel.addEventListener('message', handleCreateUser);
    return () => {
      loginChannel.removeEventListener('message', handleCreateUser);
    };
  }, []);
  return { user, isLoaded };
};
