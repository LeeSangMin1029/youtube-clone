import { memo } from 'react';
import { Content } from './styles';
import {
  getTodayFormat,
  renderViewFormat,
  renderDateSinceUpload,
} from '@/utils';

type ViewWithDateProps = {
  isExtend?: boolean;
  delimiters: boolean;
  view: string;
  publishedAt: string;
};

const ViewsWithDate = memo(
  ({ isExtend, delimiters, view, publishedAt }: ViewWithDateProps) => {
    return (
      <Content delimiters={delimiters}>
        {isExtend ? (
          <>
            <span>
              {renderViewFormat('view', {
                source: view,
              })}
            </span>
            <span>{getTodayFormat(publishedAt)}</span>
          </>
        ) : (
          <>
            <span>
              {renderViewFormat('view', {
                source: view,
                digit: 0,
              })}
            </span>
            <span>{renderDateSinceUpload(publishedAt)}</span>
          </>
        )}
      </Content>
    );
  },
);
export default ViewsWithDate;
