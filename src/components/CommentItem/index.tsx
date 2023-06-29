import { CommentThread } from '@/@types/youtube';
import { ReactNode } from 'react';
import {
  StyledComment,
  Content,
  Description,
  Expander,
  UserHeader,
  UpdatedAt,
} from './styles';
import Thumbnails from '@/components/Thumbnails';
import CustomLink from '@/components/CustomLink';
import { useHeight } from '@/hooks/useHeight';
import { renderDateSinceUpload } from '@/utils';

type CommentItemProps = {
  children?: ReactNode;
  data: CommentThread;
};
const CommentItem = ({ data }: CommentItemProps) => {
  const {
    snippet: {
      topLevelComment: { snippet },
    },
  } = data;
  const { height, ref } = useHeight();

  return (
    <StyledComment>
      <Thumbnails
        alt={snippet.authorChannelUrl}
        width="40px"
        height="40px"
        source={snippet.authorProfileImageUrl}
        to={snippet.authorChannelUrl}
      />
      <Content>
        <UserHeader>
          <CustomLink to={snippet.authorChannelUrl}>
            <span>{snippet.authorDisplayName}</span>
          </CustomLink>
          <UpdatedAt>{renderDateSinceUpload(snippet.updatedAt)}</UpdatedAt>
        </UserHeader>
        <Description>
          <span ref={ref}>{snippet.textOriginal}</span>
        </Description>
        {height > 78 && <Expander type="checkbox" />}
      </Content>
    </StyledComment>
  );
};

export default CommentItem;
