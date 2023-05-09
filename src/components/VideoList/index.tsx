import { useEffect, useState } from 'react';
import { DisplayGrid, MarginContent, GridRow } from './styles';
import { UserWorker, randomKey } from '@/utils';
import { WorkerEventData } from '@/@types/dispatch';
import { useVideos } from '@/hooks';
import VideoItem from '@/components/VideoItem';

const VideoList = () => {
  const [email, setEmail] = useState('');
  const [googleID, setGoogleID] = useState('');
  const { videos, isLoading } = useVideos(email!, googleID!);
  useEffect(() => {
    const worker = new UserWorker();
    worker.postMessage({ dispatch: 'getUser' });
    worker.onmessage = async (e: MessageEvent<WorkerEventData>) => {
      const { payload, status } = e.data;
      if (status === 'failed') return;
      if (payload) {
        setEmail(payload.email);
        setGoogleID(payload.googleID);
      }
    };
  });
  if (isLoading) return <div>isLoading...</div>;
  return (
    <MarginContent>
      <DisplayGrid>
        <GridRow>
          {videos?.map((video) => (
            <>
              <VideoItem key={randomKey()} data={video} />
              <VideoItem key={randomKey()} data={video} />
              <VideoItem key={randomKey()} data={video} />
              <VideoItem key={randomKey()} data={video} />
              <VideoItem key={randomKey()} data={video} />
            </>
          ))}
        </GridRow>
      </DisplayGrid>
    </MarginContent>
  );
};

export default VideoList;
