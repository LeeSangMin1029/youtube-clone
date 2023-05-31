import { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { DisplayGrid, MarginContent } from './styles';
import { useGetAllVideo } from '@/hooks';
import VideoItem from '@/components/VideoItem';
import { randomKey } from '@/utils';

const VideoList = memo(() => {
  const { videos } = useGetAllVideo();
  return (
    <MarginContent>
      <DisplayGrid>
        <ErrorBoundary fallback={<div>...error</div>}>
          {videos?.map((video) => (
            <VideoItem data={video} key={randomKey()} />
          ))}
        </ErrorBoundary>
      </DisplayGrid>
    </MarginContent>
  );
});

export default VideoList;
