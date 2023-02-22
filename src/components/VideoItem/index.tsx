import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Thumbnails,
  VideoDetails,
  Description,
  YoutuberData,
  StyledDiv,
  InteractStyled,
} from './styles';
import { displayedAt } from '@/utils';

const commaCheck = (digit: number) => (digit ? '.' + digit : '');
const units = [
  { unit: '4', type: '천', sub: 0 },
  { unit: '5', type: '만', sub: 0 },
  { unit: '9', type: '억', sub: 0 },
  { unit: '6 7 8', type: '만', sub: 4 },
  { unit: '10 11 12', type: '억', sub: 8 },
];

const formatingDigit = (str: string) => {
  if (str.length <= 3) return str;
  const { type, sub } = units.filter(({ unit }) =>
    unit.includes(String(str.length)),
  )[0];
  let subString = !sub
    ? commaCheck(Number(str[1]) - 48)
    : str.substring(1, str.length - sub);
  return str[0] + subString + type;
};

type VideoItemProps = {
  data: YoutubeVideoData;
};

const VideoItem = memo(({ data }: any) => {
  const {
    id,
    snippet,
    statistics: { viewCount },
    channel,
  } = data;
  const {
    channelId,
    channelTitle,
    title,
    thumbnails: vThumb,
    publishedAt,
  } = snippet;
  const channelHref = `https://www.youtube.com/channel/${channelId}`;
  const { url: channelThumb } = channel.snippet.thumbnails.default;
  const formattedViewCount = formatingDigit(viewCount);
  const formattedPublishedAt = displayedAt(new Date(publishedAt));

  return (
    <StyledDiv>
      <InteractStyled />
      <Thumbnails>
        <Link to={`/watch?id=${id}`}>
          <img src={vThumb.maxres.url} alt="test" />
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
              <span>조회수 {formattedViewCount}회</span>
              <span>{formattedPublishedAt}</span>
            </div>
          </YoutuberData>
        </Description>
      </VideoDetails>
    </StyledDiv>
  );
});

export default VideoItem;
