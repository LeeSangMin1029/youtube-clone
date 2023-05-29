import {
  StyledBoard,
  Content,
  InfoTitle,
  Extender,
  StretchContent,
} from './styles';
import {
  getTodayFormat,
  renderViewFormat,
  renderDateSinceUpload,
} from '@/utils';
import HashTag from '@/components/HashTag';
import { useCallback, useState } from 'react';
import { renderToString } from 'react-dom/server';
import parseHtml from 'html-react-parser';
import { rHashTags } from '@/utils';

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
  const html = parseHtml(
    description.replaceAll(rHashTags, (substring: string) =>
      renderToString(<HashTag substring={substring} />),
    ),
  );

  const onClickHandler = useCallback(() => {
    setExtend(!isExtend);
  }, [isExtend]);

  return (
    <StyledBoard isExtend={isExtend}>
      <Content>
        <InfoTitle>
          <span>
            {isExtend
              ? `${renderViewFormat('view', {
                  source: viewCount,
                })} ${getTodayFormat(UTCDate)}`
              : `${renderViewFormat('view', {
                  source: viewCount,
                  digit: 0,
                })} ${renderDateSinceUpload(UTCDate)}`}
          </span>
        </InfoTitle>
        {isExtend ? html : <StretchContent>{html}</StretchContent>}
        {isExtend && <div></div>}
        <Extender isExtend={isExtend} onClick={onClickHandler}>
          {isExtend ? '간략히' : '더보기'}
        </Extender>
      </Content>
    </StyledBoard>
  );
};

export default VideoDescription;
