import { CommentThread } from '@/@types/youtube';
import { ReactNode } from 'react';
import { DislikeThumb, LikeThumb } from '@/assets';
import {
  StyledComment,
  Content,
  Description,
  Expander,
  UserHeader,
  UpdatedAt,
  CommentInteract,
} from './styles';
import Thumbnails from '@/components/Thumbnails';
import CustomLink from '@/components/CustomLink';
import { useHeight } from '@/hooks/useHeight';
import { renderDateSinceUpload } from '@/utils';
import AnimateElement from '@/components/AnimateElement';
import { BaseButton } from '@/styles/utils';

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
  const modified = snippet?.publishedAt === snippet?.updatedAt;
  const resultUpdatedAt =
    renderDateSinceUpload(snippet.publishedAt) + (modified ? '' : '(수정됨)');
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
          <UpdatedAt>{resultUpdatedAt}</UpdatedAt>
        </UserHeader>
        <Description>
          <span ref={ref}>{snippet.textOriginal}</span>
        </Description>
        {height > 78 && <Expander type="checkbox" />}
        <CommentInteract>
          <AnimateElement Styled={BaseButton}>
            <DislikeThumb width="24px" height="24px" />
          </AnimateElement>
          <AnimateElement Styled={BaseButton}>
            <LikeThumb width="24px" height="24px" />
          </AnimateElement>
        </CommentInteract>
      </Content>
    </StyledComment>
  );
};

export default CommentItem;
