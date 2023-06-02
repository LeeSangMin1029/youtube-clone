import VideoManangement from '@/components/VideoManagement';
import VideoDescription from '@/components/VideoDescription';
import {
  PlayerBoard,
  VideoDetail,
  ChannelInfo,
  BetweenContent,
} from './styles';
import { useFindVideo } from '@/hooks';
import { getVideoInfo, renderViewFormat } from '@/utils';
import parseHtml from 'html-react-parser';

const VideoPlayer = () => {
  const video = useFindVideo();
  const {
    videoId,
    title,
    channelId,
    videoSrc,
    channelTitle,
    description,
    subscriberCount,
    viewCount,
    publishedAt,
    html,
  } = getVideoInfo(video!);
  const target = `src="https://www.youtube.com/embed/${videoId}`;
  const Parse = parseHtml(
    html
      ?.toString()
      .replaceAll(target, `${target}?autoplay=1&mute=1&wmode=opaque`) || '',
  );
  return (
    <PlayerBoard>
      {Parse}
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
