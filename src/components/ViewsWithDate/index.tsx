import { memo, useMemo } from 'react';
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

const ViewsWithDate = ({
  isExtend,
  delimiters,
  view,
  publishedAt,
}: ViewWithDateProps) => {
  const renderOptions = useMemo(
    () => ({ source: view, digit: isExtend ? undefined : 0 }),
    [isExtend, view],
  );

  const formattedView = useMemo(
    () => renderViewFormat('view', renderOptions),
    [renderOptions],
  );

  const formattedDate = useMemo(
    () =>
      isExtend
        ? getTodayFormat(publishedAt)
        : renderDateSinceUpload(publishedAt),
    [isExtend, publishedAt],
  );

  return (
    <Content delimiters={delimiters}>
      <span>{formattedView}</span>
      <span>{formattedDate}</span>
    </Content>
  );
};

export default memo(ViewsWithDate);
