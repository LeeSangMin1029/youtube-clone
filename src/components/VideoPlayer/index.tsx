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
import { useFindVideo } from '@/hooks';
import { getVideoInfo, renderViewFormat } from '@/utils';

const VideoPlayer = () => {
  const video = useFindVideo();
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
                <span>
                  {renderViewFormat('subscription', {
                    source: subscriberCount,
                    digit: 1,
                  })}
                </span>
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
    </PlayerBoard>
  );
};

export default VideoPlayer;
