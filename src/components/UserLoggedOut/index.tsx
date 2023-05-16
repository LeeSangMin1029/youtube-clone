import { memo } from 'react';
import { SVGWrapper, LoginButton } from './styles';
import { openSignInWindow, googleAuthentication } from '@/utils';
import { SettingIcon, LoginIcon } from '@/assets';
import { useLogin } from '@/hooks';

const UserLoggedOut = memo(() => {
  useLogin();
  const displayLoginWindow = async () => {
    const openPopupUrl = await googleAuthentication();
    openSignInWindow(openPopupUrl, 'google Auth');
  };

  return (
    <>
      <SVGWrapper>
        <SettingIcon />
      </SVGWrapper>
      <LoginButton onClick={displayLoginWindow}>
        <LoginIcon fill="#065fd4" width="24px" height="24px" />
        로그인
      </LoginButton>
    </>
  );
});

export default UserLoggedOut;
