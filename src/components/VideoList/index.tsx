import { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { DisplayGrid, MarginContent } from './styles';
import { useVideos } from '@/hooks';
import VideoItem from '../VideoItem';
import { randomKey } from '@/utils';

const VideoList = memo(() => {
  const { videos } = useVideos({ results: 5 }, '');
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
