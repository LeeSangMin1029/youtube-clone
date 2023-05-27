import { useSearchParams } from 'react-router-dom';
import VideoManangement from '@/components/VideoManagement';
import Player from '@/components/Player';
import VideoDescription from '@/components/VideoDescription';
import {
  PlayerBoard,
  VideoDetail,
  ChannelInfo,
  BetweenContent,
} from './styles';
import { useVideos } from '@/hooks';
import { getVideoInfo, getCountFormat } from '@/utils';

const VideoPlayer = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const { videos } = useVideos({ id: [id!] });
  const video = videos?.at(0);
  const {
    width,
    height,
    videoId,
    title,
    channelId,
    videoSrc,
    channelTitle,
    description,
    subscriberCount,
    viewCount,
    publishedAt,
  } = getVideoInfo(video!);

  return (
    <PlayerBoard>
      <>
        <Player width={width} height={height} videoId={videoId} />
        {video && (
          <VideoDetail>
            <h1>{title}</h1>
            <BetweenContent>
              <ChannelInfo>
                <a href={channelId}>
                  <img src={videoSrc} />
                </a>
                <div>
                  <a href={channelId}>{channelTitle}</a>
                  <p>구독자 {getCountFormat(subscriberCount, 1)}명</p>
                </div>
              </ChannelInfo>
              <VideoManangement />
            </BetweenContent>
            <VideoDescription
              description={description}
              viewCount={viewCount}
              publishedAt={publishedAt}
            />
          </VideoDetail>
        )}
      </>
    </PlayerBoard>
  );
};

export default VideoPlayer;
