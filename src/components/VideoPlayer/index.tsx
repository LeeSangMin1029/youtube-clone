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

const WIDTH = '1268';
const HEIGHT = '713';

const VideoPlayer = () => {
  const [params] = useSearchParams();
  const id: string | null = params.get('id');
  // const { video, isLoading } = useFetchVideo(id, WIDTH, HEIGHT);
  // if (isLoading) return <div>...Loading</div>;
  // const { embedHtml } = video.player;
  const parseToComponent = (html: string) => parse(html);
  return (
    <PlayerBoard>
      <PlayerStyled width={WIDTH} height={HEIGHT}>
        {/* {parseToComponent(embedHtml)} */}
      </PlayerStyled>
      <VideoDetail>
        {/* <h1>{video.snippet.title}</h1> */}
        <BetweenContent>
          <ChannelInfo>
            <a
              href={`https://www.youtube.com/channel/UCtybqqaTj6Nx74Azdz1KrsA`}
            >
              <img src="https://yt3.ggpht.com/eyq-DtqUZb9kY1xHkTi1BrmBieCg8E7nI4hBA3_z_46dEBimEGxubgPevtuxUSyNOTIp8RWvOXg=s88-c-k-c0x00ffffff-no-rj" />
            </a>
            <div>
              <a
                href={`https://www.youtube.com/channel/UCtybqqaTj6Nx74Azdz1KrsA`}
              >
                아무튼 채널 이름임
              </a>
              <p>구독자</p>
            </div>
          </ChannelInfo>
          <VideoManangement />
        </BetweenContent>
      </VideoDetail>
    </PlayerBoard>
  );
};

export default VideoPlayer;
