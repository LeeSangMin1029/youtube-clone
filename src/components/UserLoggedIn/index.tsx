import { SVGWrapper, UserProfile } from './styles';
import { ReactComponent as UploadIcon } from '@/assets/video_upload.svg';
import { ReactComponent as AlarmIcon } from '@/assets/video_alarm.svg';
import { useUserContext } from '@/context/UserContext';
import { memo } from 'react';

const UserLoggedIn = memo(() => {
  const { user } = useUserContext();

  return (
    <>
      <SVGWrapper>
        <UploadIcon />
      </SVGWrapper>
      <SVGWrapper>
        <AlarmIcon />
      </SVGWrapper>
      <UserProfile>
        <div>
          <img src={user?.thumbnails} width={32} height={32} />
        </div>
      </UserProfile>
    </>
  );
});
export default UserLoggedIn;
