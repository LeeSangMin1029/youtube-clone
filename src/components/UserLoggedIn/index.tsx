import { UserProfile } from './styles';
import { memo } from 'react';
import { useUserContext } from '@/context/UserContext';
import Upload from '@/components/Upload';
import Alarm from '@/components/Alarm';

const UserLoggedIn = memo(() => {
  const { user } = useUserContext();
  return (
    <>
      <Upload />
      <Alarm />
      <UserProfile>
        <div>
          <img src={user?.thumbnails} width={32} height={32} />
        </div>
      </UserProfile>
    </>
  );
});
export default UserLoggedIn;
