import { SxProps } from '@mui/system';
import Stack from '@mui/material/Stack';
import Avatar from './Avatar';

type UserProps = {
  sx?: SxProps;
};

const User = ({ sx }: UserProps) => {
  return (
    <Stack sx={sx}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </Stack>
  );
};

export default User;
