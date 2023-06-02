import VideoList from '@/components/VideoList';
import { DisplayGrid, MarginContent } from './styles';
import Fallback from '@/components/Fallback';
import { Videos as Skeleton } from '@/components/Skeleton';
import ErrorBoundarySuspense from '@/components/ErrorBoundarySuspense';

const Videos = () => {
  return (
    <MarginContent>
      <DisplayGrid>
        <ErrorBoundarySuspense
          Fallback={Fallback}
          Loading={<Skeleton videoCount={5} />}
        >
          <VideoList />
        </ErrorBoundarySuspense>
      </DisplayGrid>
    </MarginContent>
  );
};

export default Videos;
