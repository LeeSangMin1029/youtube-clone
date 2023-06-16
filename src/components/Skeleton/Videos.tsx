import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import Avatar from './Avatar';
import { randomKey } from '@/utils';
import { useVideoContext } from '@/context/VideoContext';

const Videos = () => {
  const { viewVideoCount } = useVideoContext();
  return (
    <>
      {[...Array(viewVideoCount).keys()].map(() => (
        <Card
          key={randomKey()}
          sx={{ maxWidth: 344, border: 'none', boxShadow: 'none' }}
        >
          <Skeleton
            sx={{ height: 194, borderRadius: '12px' }}
            animation="wave"
            variant="rounded"
          />
          <CardHeader
            sx={{ padding: 0 }}
            avatar={<Avatar sx={{ marginBottom: '24px' }} />}
            title={<Skeleton animation="wave" height={40} width="90%" />}
            subheader={<Skeleton animation="wave" height={40} width="70%" />}
          />
        </Card>
      ))}
    </>
  );
};
export default Videos;
