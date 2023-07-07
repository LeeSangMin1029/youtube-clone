import { Videos as Skeleton } from '@/components/Skeleton';
import Fallback from '@/components/Fallback';
import VideoList from '@/components/VideoList';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';

const Videos = () => {
  return (
    <>
      <div className="expandable-margin" />
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<Skeleton />}>
        <VideoList />
      </ErrorBoundarySuspense>
      <div className="expandable-margin" />
    </>
  );
};

export default Videos;
