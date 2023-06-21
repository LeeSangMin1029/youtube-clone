import { Videos as Skeleton } from '@/components/Skeleton';
import Fallback from '@/components/Fallback';
import VideoList from '@/components/VideoList';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';
import ExpandableMargin from '@/components/ExpandableMargin';

const Videos = () => {
  return (
    <>
      <ExpandableMargin value="32px" />
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<Skeleton />}>
        <VideoList />
      </ErrorBoundarySuspense>
      <ExpandableMargin value="32px" />
    </>
  );
};

export default Videos;
