import { UserData, UserDataWithoutId } from '@/@types/database';
import { WebWorkerAction } from '@/@types/dispatch';
import { memo, useEffect, useState, useLayoutEffect } from 'react';
import {
  Container,
  Interact,
  LoginButton,
  UserProfile,
  SVGWrapper,
} from './styles';
import { openSignInWindow, worker } from '@/utils';
import { ReactComponent as UploadIcon } from '@/assets/video_upload.svg';
import { ReactComponent as AlarmIcon } from '@/assets/video_alarm.svg';
import { ReactComponent as SettingIcon } from '@/assets/app_settings.svg';
import { ReactComponent as LoginIcon } from '@/assets/user_login_profile.svg';

type ReceivingData = {
  payload?: UserDataWithoutId | null;
  status: string;
  dispatch: WebWorkerAction;
};

const Loading = () => {
  return <div></div>;
};

const UserInteract = memo(() => {
  const [profile, setProfile] = useState<UserDataWithoutId | null>(null);
  const [isLoading, setLoading] = useState(true);
  const handleClick = async () => {
    const openPopupUrl = await createGoogleAuthLink();
    openSignInWindow(openPopupUrl, 'youtube Auth');
  };
  const createGoogleAuthLink = async () => {
    try {
      const request = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
      });
      const response = await request.json();
      return response.url;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchConfig = (token: string): RequestInit => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  useEffect(() => {
    const channel = new BroadcastChannel('authToken');
    channel.onmessage = async (e) => {
      const eventData = e.data;
      const reqInit = fetchConfig(eventData.accessToken);
      const googleRes = await fetch(
        `https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos`,
        reqInit,
      );
      const youtubeRes = await fetch(
        'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true',
        reqInit,
      );
      const googleData = await googleRes.json();
      const youtubeData = await youtubeRes.json();
      const { thumbnails, customUrl, title } = youtubeData.items[0].snippet;
      const postData: UserData = {
        email: googleData.emailAddresses[0].value,
        googleName: googleData.names[0].displayName,
        id: googleData.resourceName.split('/')[1],
        gThumbnails: googleData.photos[0].url,
        yThumbnails: {
          url: thumbnails.default.url,
          width: 32,
          height: 32,
        },
        customUrl,
        youtubeName: title,
      };
      worker.postMessage({
        payload: postData,
        dispatch: 'addUser',
      });
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
            setLoading(true);
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
                <img
                  src={profile?.yThumbnails.url}
                  width={profile?.yThumbnails.width}
                  height={profile?.yThumbnails.height}
                />
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
