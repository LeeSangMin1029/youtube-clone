import { useWebWorker } from './useWebWorker';
import { useUserContext } from '@/context/UserContext';
import { usePromise } from './usePromise';

export const useGetUser = () => {
  const { user, setUser } = useUserContext();
  const { workerApi } = useWebWorker();
  const isLoaded = usePromise(async () => {
    const user = await workerApi.getUser();
    if (user) setUser({ isLoggedIn: true, ...user });
    return true;
  });
  return { user, isLoaded };
};
