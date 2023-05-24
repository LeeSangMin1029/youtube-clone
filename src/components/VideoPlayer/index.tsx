import { useSearchParams } from 'react-router-dom';
import YTPlayer from 'react-youtube';
import VideoManangement from '@/components/VideoManagement';
import {
  PlayerBoard,
  VideoDetail,
  ChannelInfo,
  BetweenContent,
} from './styles';
import { useVideos } from '@/hooks';
import { getVideoInfo } from '@/utils';

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
    viewCount,
    videoSrc,
    channelTitle,
    subscriberCount,
  } = getVideoInfo(video!);
  console.log(video);
  return (
    <PlayerBoard>
      {video && (
        <>
          <YTPlayer
            className="player"
            videoId={videoId}
            opts={{
              height,
              width,
              playerVars: {
                autoplay: 1,
                mute: 1,
              },
            }}
          />
          <VideoDetail>
            <h1>{title}</h1>
            <BetweenContent>
              <ChannelInfo>
                <a href={channelId}>
                  <img src={videoSrc} />
                </a>
                <div>
                  <a href={channelId}>{channelTitle}</a>
                  <p>구독자 {subscriberCount}</p>
                </div>
              </ChannelInfo>
              <VideoManangement />
            </BetweenContent>
          </VideoDetail>
        </>
      )}
    </PlayerBoard>
  );
};

export default VideoPlayer;
