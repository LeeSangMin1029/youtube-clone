import { StyledBoard, Content, Extender, StretchContent } from './styles';
import HashTag from '@/components/HashTag';
import ViewsWithDate from '@/components/ViewsWithDate';
import { memo, useCallback, useState } from 'react';
import { renderToString } from 'react-dom/server';
import parseHtml from 'html-react-parser';
import { rHashTags } from '@/utils';

type DescriptionProps = {
  description: string;
  viewCount: string;
  publishedAt: string;
};

const VideoDescription = memo(
  ({ description, viewCount, publishedAt }: DescriptionProps) => {
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
          <ViewsWithDate
            isExtend={isExtend}
            delimiters={false}
            view={viewCount}
            publishedAt={publishedAt}
          />
          {isExtend ? html : <StretchContent>{html}</StretchContent>}
          {isExtend && <div></div>}
          <Extender isExtend={isExtend} onClick={onClickHandler}>
            {isExtend ? '간략히' : '더보기'}
          </Extender>
        </Content>
      </StyledBoard>
    );
  },
);

export default VideoDescription;
