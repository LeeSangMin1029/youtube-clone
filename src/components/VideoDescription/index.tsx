import {
  StyledBoard,
  Content,
  InfoTitle,
  Expander,
  LinkHashtag,
  StretchContent,
} from './styles';
import {
  getTodayFormat,
  getCountFormat,
  getDateSinceUpload,
  getViewFormat,
} from '@/utils';
import { useState } from 'react';
import { renderToString } from 'react-dom/server';
import parseHtml from 'html-react-parser';

type DescriptionProps = {
  description: string;
  viewCount: string;
  publishedAt: string;
};

const VideoDescription = ({
  description,
  viewCount,
  publishedAt: UTCDate,
}: DescriptionProps) => {
  const [isExtend, setExtend] = useState(false);
  const onClickHandler = () => {
    setExtend(!isExtend);
  };
  const replacedDescription = parseHtml(
    description.replaceAll(/#[a-zA-Zㄱ-ㅎ가-힣0-9_]+/gms, (substring: string) =>
      renderToString(
        <LinkHashtag>
          <a href={`https://www.youtube.com/hashtag/${substring.substring(1)}`}>
            {substring}
          </a>
        </LinkHashtag>,
      ),
    ),
  );
  return (
    <StyledBoard isExtend={isExtend}>
      <Content>
        <InfoTitle>
          조회수{' '}
          {isExtend ? (
            <>
              {getViewFormat(viewCount)}회 {getTodayFormat(UTCDate)}
            </>
          ) : (
            <>
              {getCountFormat(viewCount, 0)}회 {getDateSinceUpload(UTCDate)}
            </>
          )}
        </InfoTitle>
        {isExtend ? (
          replacedDescription
        ) : (
          <StretchContent>{replacedDescription}</StretchContent>
        )}
        {isExtend && <div></div>}
        <Expander isExtend={isExtend} onClick={onClickHandler}>
          {isExtend ? '간략히' : '더보기'}
        </Expander>
      </Content>
    </StyledBoard>
  );
};
export default VideoDescription;
