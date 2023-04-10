import { UserData } from '@/@types/database';
import { WebWorkerAction } from '@/@types/dispatch';
import { memo, useEffect, useState } from 'react';
import {
  Container,
  Interact,
  LoginButton,
  UserProfile,
  SVGWrapper,
} from './styles';
import { openSignInWindow, worker } from '@/utils';
import { authGoogleURL } from '@/api';
import { ReactComponent as UploadIcon } from '@/assets/video_upload.svg';
import { ReactComponent as AlarmIcon } from '@/assets/video_alarm.svg';
import { ReactComponent as SettingIcon } from '@/assets/app_settings.svg';
import { ReactComponent as LoginIcon } from '@/assets/user_login_profile.svg';

type ReceivingData = {
  payload?: UserData | null;
  status: string;
  dispatch: WebWorkerAction;
};

const Loading = () => {
  return <div></div>;
};

const UserInteract = memo(() => {
  const [profile, setProfile] = useState<UserData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const handleClick = async () => {
    const openPopupUrl = await authGoogleURL();
    openSignInWindow(openPopupUrl, 'youtube Auth');
  };

  useEffect(() => {
    const loginChannel = new BroadcastChannel('login');
    loginChannel.onmessage = async (e: MessageEvent<UserData>) => {
      const userData = e.data;
      setProfile(userData);
      worker.postMessage({ dispatch: 'addUser', payload: userData });
    };
  }, []);

  useEffect(() => {
    if (profile) return;
    else worker.postMessage({ dispatch: 'getUser' });
    worker.onmessage = (e: MessageEvent<ReceivingData>) => {
      const { status, payload: user, dispatch } = e.data;
      switch (dispatch) {
        case 'getUser':
          if (status === 'success') {
            if (user) setProfile({ ...user });
            setLoading(true);
          }
          setLoading(false);
          break;
        case 'addUser':
          if (status === 'success') {
            setLoading(false);
          }
          break;
      }
    };
  }, [isLoading]);

  return (
    <Container>
      <Interact>
        {isLoading ? (
          <Loading />
        ) : profile ? (
          <>
            <SVGWrapper>
              <UploadIcon />
            </SVGWrapper>
            <SVGWrapper>
              <AlarmIcon />
            </SVGWrapper>
            <UserProfile>
              <div>
                <img src={profile.thumbnails} width={32} height={32} />
              </div>
            </UserProfile>
          </>
        ) : (
          <>
            <SVGWrapper>
              <SettingIcon />
            </SVGWrapper>
            <LoginButton onClick={handleClick}>
              <LoginIcon fill="#065fd4" width="24px" height="24px" />
              로그인
            </LoginButton>
          </>
        )}
      </Interact>
    </Container>
  );
});

export default UserInteract;
