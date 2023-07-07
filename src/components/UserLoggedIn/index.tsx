import { UserProfile } from './styles';
import { memo } from 'react';
import { useUserContext } from '@/context/UserContext';
import { AlarmIcon, UploadIcon } from '@/assets';
import AnimateElement from '@/components/AnimateElement';
import { ExtendsButton } from './styles';

const UserLoggedIn = memo(() => {
  const { user } = useUserContext();
  return (
    <>
      <AnimateElement StyledComp={ExtendsButton}>
        <UploadIcon width="24px" height="24px" />
      </AnimateElement>
      <AnimateElement StyledComp={ExtendsButton}>
        <AlarmIcon width="24px" height="24px" />
      </AnimateElement>
      <UserProfile>
        <div>
          <img src={user?.thumbnails} width={32} height={32} />
        </div>
      </UserProfile>
    </>
  );
});
export default UserLoggedIn;
