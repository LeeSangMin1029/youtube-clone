import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Thumbnails,
  VideoDetails,
  Description,
  YoutuberData,
  StyledDiv,
} from "./styles";
const VideoItem = memo(({ videoData }) => {
  const {
    id,
    snippet,
    statistics: { viewCount },
    channel,
  } = videoData;
  const { channelId, channelTitle, title, thumbnails: vThumb } = snippet;
  const channelHref = `https://www.youtube.com/channel/${channelId}`;
  const { url: channelThumb } = channel.snippet.thumbnails.default;

  return (
    <StyledDiv>
      <Thumbnails>
        <Link to={`/watch?id=${id}`}>
          <img src={vThumb.high.url} alt="test" />
        </Link>
      </Thumbnails>
      <VideoDetails>
        <a href={channelHref}>
          <img src={channelThumb} alt="testI" width="36px" height="36px" />
        </a>
        <Description>
          <h3>
            <Link to={`/watch?id=${id}`}>{title}</Link>
          </h3>
          <YoutuberData>
            <a href={channelHref}>{channelTitle}</a>
            <div>
              <span>조회수{viewCount}회</span>
              <span>..년전</span>
            </div>
          </YoutuberData>
        </Description>
      </VideoDetails>
    </StyledDiv>
  );
});

export default VideoItem;
