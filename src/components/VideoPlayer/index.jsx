import { useSearchParams } from "react-router-dom";
import parse from "html-react-parser";
import {
  PlayerBoard,
  VideoDetail,
  PlayerStyled,
  ChannelInfo,
  VideoInteraction,
  BetweenContent,
} from "./styles";
import { useFetchVideo } from "@/hooks";

const VideoPlayer = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const { video } = useFetchVideo(id, "1280", "714");
  const { embedHtml } = video.player;
  const parseToComponent = (html) => parse(html);
  return (
    <PlayerBoard>
      <PlayerStyled>{parseToComponent(embedHtml)}</PlayerStyled>
      <VideoDetail>
        <h1>{video.snippet.title}</h1>
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
                채널 이름임 아무튼 채널 이름임
              </a>
              <p>구독자</p>
            </div>
          </ChannelInfo>
          <VideoInteraction></VideoInteraction>
        </BetweenContent>
      </VideoDetail>
    </PlayerBoard>
  );
};

export default VideoPlayer;
