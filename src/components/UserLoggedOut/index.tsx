import { UserData } from '@/@types/database';
import { SVGWrapper, LoginButton } from './styles';
import { openSignInWindow, worker } from '@/utils';
import { authGoogleURL } from '@/api';
import { memo, useEffect } from 'react';
import { ReactComponent as SettingIcon } from '@/assets/app_settings.svg';
import { ReactComponent as LoginIcon } from '@/assets/user_login_profile.svg';
import { useUserContext } from '@/context/UserContext';

const UserLoggedOut = memo(() => {
  const { setUser, setLogged } = useUserContext();
  const handleClick = async () => {
    const openPopupUrl = await authGoogleURL();
    openSignInWindow(openPopupUrl, 'youtube Auth');
  };

  useEffect(() => {
    const loginChannel = new BroadcastChannel('login');
    loginChannel.onmessage = async (e: MessageEvent<UserData>) => {
      const userData = e.data;
      setUser(userData);
      setLogged(true);
      worker.postMessage({ dispatch: 'addUser', payload: userData });
    };
  }, []);

  return (
    <>
      <SVGWrapper>
        <SettingIcon />
      </SVGWrapper>
      <LoginButton onClick={handleClick}>
        <LoginIcon fill="#065fd4" width="24px" height="24px" />
        로그인
      </LoginButton>
    </>
  );
});

export default UserLoggedOut;
