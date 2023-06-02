import { Skeleton } from '@mui/material';
import { SxProps } from '@mui/system';

type AvatarProps = {
  sx?: SxProps;
};
const Avatar = ({ sx }: AvatarProps) => {
  return (
    <Skeleton
      variant="circular"
      animation="wave"
      width={36}
      height={36}
      sx={sx}
    />
  );
};

export default Avatar;
