import { useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';
import VideoManangement from '@/components/VideoManagement';
import {
  PlayerBoard,
  VideoDetail,
  PlayerStyled,
  ChannelInfo,
  BetweenContent,
} from './styles';
import { useVideos } from '@/hooks';

const WIDTH = '1268';
const HEIGHT = '713';

const VideoPlayer = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const { videos } = useVideos({ id: id! }, '0');
  let video = videos?.at(0);
  const parseToComponent = (html: string) => parse(html);
  return (
    <PlayerBoard>
      {video && (
        <>
          <PlayerStyled width={WIDTH} height={HEIGHT}>
            {video && parseToComponent(video.player.embedHtml)}
          </PlayerStyled>
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
