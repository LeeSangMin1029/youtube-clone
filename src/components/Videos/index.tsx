import { Videos as Skeleton } from '@/components/Skeleton';
import Fallback from '@/components/Fallback';
import VideoList from '@/components/VideoList';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';

const Videos = () => {
  return (
    <ErrorBoundarySuspense Fallback={Fallback} Loading={<Skeleton />}>
      <VideoList />
    </ErrorBoundarySuspense>
  );
};

export default Videos;
