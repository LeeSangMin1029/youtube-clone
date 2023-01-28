import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Thumbnails,
  VideoDetails,
  Description,
  YoutuberData,
  StyledDiv,
} from "./styles";
import TestImage from "@/images/imagess.webp";
import Channel from "@/images/channel.jpg";

const VideoItem = memo(() => {
  return (
    <StyledDiv>
      <Thumbnails>
        <Link to="/watch?id=LV58J54qUFM">
          <img src={TestImage} alt="test" />
        </Link>
      </Thumbnails>
      <VideoDetails>
        <a href={`https://www.youtube.com/@user-os7bc4lb9h`}>
          <img src={Channel} alt="testI" width="36px" height="36px" />
        </a>
        <Description>
          <h3>
            <Link to="/watch?id=LV58J54qUFM">
              bj빵훈이 - 살기위해서(노을) 2절 레전드
            </Link>
          </h3>
          <YoutuberData>
            <a href="https://www.youtube.com/@user-os7bc4lb9h">유튜버 이름</a>
            <div>
              <span>조회수..회</span>
              <span>..년전</span>
            </div>
          </YoutuberData>
        </Description>
      </VideoDetails>
    </StyledDiv>
  );
});

export default VideoItem;
