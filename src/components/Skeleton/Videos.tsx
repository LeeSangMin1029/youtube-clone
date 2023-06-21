import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import Avatar from './Avatar';
import { randomKey } from '@/utils';
import { useVideoContext } from '@/context/VideoContext';
import { DisplayGrid } from '@/styles/utils';
import { memo } from 'react';

const Videos = () => {
  const { viewVideoCount } = useVideoContext();
  return (
    <DisplayGrid>
      {[...Array(viewVideoCount).keys()].map(() => (
        <Card
          key={randomKey()}
          sx={{
            maxWidth: '344px',
            width: '100%',
            border: 'none',
            boxShadow: 'none',
            margin: '0 8px 40px 8px',
          }}
        >
          <Skeleton
            sx={{ height: '194px', borderRadius: '12px' }}
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
    </DisplayGrid>
  );
};
export default memo(Videos);
