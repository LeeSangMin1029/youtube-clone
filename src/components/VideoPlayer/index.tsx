import { useSearchParams } from 'react-router-dom';
import VideoManangement from '@/components/VideoManagement';
import {
  PlayerBoard,
  VideoDetail,
  ChannelInfo,
  BetweenContent,
} from './styles';
import { useVideos } from '@/hooks';
import YTPlayer from 'react-youtube';

const VideoPlayer = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const { videos } = useVideos({ id: id! }, '0');
  const video = videos?.at(0);

  return (
    <PlayerBoard>
      {video && (
        <>
          <YTPlayer
            className="player"
            videoId={video.id}
            opts={{
              height: video?.player.embedHeight,
              width: video?.player.embedWidth,
              playerVars: {
                autoplay: 1,
                mute: 1,
              },
            }}
          />
          <VideoDetail>
            <h1>{video && video.snippet.title}</h1>
            <BetweenContent>
              <ChannelInfo>
                <a href={`https://www.youtube.com/channel/${video.channel.id}`}>
                  <img src={video.channel.snippet.thumbnails.medium.url} />
                </a>
                <div>
                  <a
                    href={`https://www.youtube.com/channel/${video.channel.id}`}
                  >
                    {`${video.snippet.channelTitle}`}
                  </a>
                  <p>구독자 {`${video.statistics.viewCount}`}</p>
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
