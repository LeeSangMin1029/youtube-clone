import VideoManangement from '@/components/VideoManagement';
import VideoDescription from '@/components/VideoDescription';
import {
  PlayerBoard,
  VideoDetail,
  ChannelInfo,
  BetweenContent,
  WrapperPlayer,
} from './styles';
import { useFindVideo } from '@/hooks';
import { getVideoInfo, renderViewFormat } from '@/utils';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import ChannelThumbnails from '@/components/ChannelThumbnails';
import ErrorBoundarySuspense from '../ErrorBoundarySuspense';
import Fallback from '../Fallback';
import Comments from '../Comments';

const VideoPlayer = () => {
  const video = useFindVideo();
  const {
    videoId,
    title,
    channelId,
    thumbnails,
    channelTitle,
    commentCount,
    description,
    subscriberCount,
    viewCount,
    publishedAt,
    width,
    height,
  } = getVideoInfo(video!);

  return (
    <PlayerBoard>
      <WrapperPlayer>
        <YoutubeVideoPlayer videoId={videoId} height={height} width={width} />
      </WrapperPlayer>
      {video && (
        <VideoDetail>
          <h1>{title}</h1>
          <BetweenContent>
            <ChannelInfo>
              <a href={channelId}>
                <ChannelThumbnails
                  source={thumbnails}
                  width="40px"
                  height="40px"
                  alt={channelTitle}
                />
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

      <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
        <Comments id={videoId} count={commentCount} />
      </ErrorBoundarySuspense>
    </PlayerBoard>
  );
};

export default VideoPlayer;
