import { useUserContext } from '@/context/UserContext';
import { getUser } from '@/database';
import { usePromise } from './usePromise';

export const useGetUser = () => {
  const { user, setUser } = useUserContext();
  const isLoaded = usePromise(async () => {
    if (!user.isLoggedIn) {
      const dbUser = await getUser();
      if (dbUser) setUser({ isLoggedIn: true, ...dbUser });
    }
    return true;
  });

  return { user, isLoaded };
};
