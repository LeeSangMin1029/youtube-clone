import { DisplayGrid, MarginContent } from './styles';
import { Videos as Skeleton } from '@/components/Skeleton';
import Fallback from '@/components/Fallback';
import VideoList from '@/components/VideoList';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';

const Videos = () => {
  return (
    <MarginContent>
      <DisplayGrid>
        <ErrorBoundarySuspense Fallback={Fallback} Loading={<Skeleton />}>
          <VideoList />
        </ErrorBoundarySuspense>
      </DisplayGrid>
    </MarginContent>
  );
};

export default Videos;
