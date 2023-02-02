import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Thumbnails,
  VideoDetails,
  Description,
  YoutuberData,
  StyledDiv,
} from "./styles";

const commaCheck = (digit) => (digit ? "." + digit : "");
const units = [
  { unit: "4", type: "천", sub: 0 },
  { unit: "5", type: "만", sub: 0 },
  { unit: "9", type: "억", sub: 0 },
  { unit: "6 7 8", type: "만", sub: 4 },
  { unit: "10 11 12", type: "억", sub: 8 },
];

const formatingDigit = (str = "") => {
  if (str.length <= 3) return str;
  const { type, sub } = units.filter(({ unit }) =>
    unit.includes(str.length)
  )[0];
  let subString = !sub
    ? commaCheck(str[1] - "0")
    : str.substring(1, str.length - sub);
  return str[0] + subString + type;
};

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
  const formattedViewCount = formatingDigit(viewCount);
  return (
    <StyledDiv>
      <Thumbnails>
        <Link to={`/watch?id=${id}`} state={videoData}>
          <img src={vThumb.high.url} alt="test" />
        </Link>
      </Thumbnails>
      <VideoDetails>
        <a href={channelHref}>
          <img src={channelThumb} alt="testI" width="36px" height="36px" />
        </a>
        <Description>
          <h3>
            <Link to={`/watch?id=${id}`} state={videoData}>
              {title}
            </Link>
          </h3>
          <YoutuberData>
            <a href={channelHref}>{channelTitle}</a>
            <div>
              <span>조회수 {formattedViewCount}회</span>
              <span>..년전</span>
            </div>
          </YoutuberData>
        </Description>
      </VideoDetails>
    </StyledDiv>
  );
});

export default VideoItem;
