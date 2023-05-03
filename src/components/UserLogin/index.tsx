import { UserData } from '@/@types/database';
import { WebWorkerAction } from '@/@types/dispatch';
import UserLoggedIn from '@/components/UserLoggedIn';
import UserLoggedOut from '@/components/UserLoggedOut';
import { memo, useEffect } from 'react';
import Loading from '@/components/Loading';
import { useUserContext } from '@/context/UserContext';
import { UserWorker } from '@/utils';

type ReceivingData = {
  payload?: UserData | null;
  status: string;
  dispatch: WebWorkerAction;
};

const UserLogin = memo(() => {
  const { setUser, setLogged, isLoggedIn } = useUserContext();

  useEffect(() => {
    const worker = new UserWorker();
    worker.postMessage({ dispatch: 'getUser' });
    worker.onmessage = (e: MessageEvent<ReceivingData>) => {
      const { status, payload: newuser } = e.data;
      if (status === 'success' && newuser) {
        setLogged(true);
        setUser({ ...newuser });
      }
    };
  }, []);

  return <Loading>{isLoggedIn ? <UserLoggedIn /> : <UserLoggedOut />}</Loading>;
});

export default UserLogin;
