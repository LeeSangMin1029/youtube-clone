import { CommentThread } from '@/@types/youtube';
import { ReactNode } from 'react';
import {
  StyledComment,
  Content,
  Description,
  Expander,
  UserHeader,
  UpdatedAt,
  StyledToolbarWithExpander,
} from './styles';
import Thumbnails from '@/components/Thumbnails';
import CustomLink from '@/components/CustomLink';
import CommentToolbar from '@/components/CommentToolbar';
import { useHeight } from '@/hooks/useHeight';
import { renderDateSinceUpload } from '@/utils';
import AnimateElement from '@/components/AnimateElement';
import { RoundedButton } from '@/styles/utils';
import { MoreDetails } from '@/assets';

type CommentItemProps = {
  children?: ReactNode;
  data: CommentThread;
};
const CommentItem = ({ data }: CommentItemProps) => {
  const {
    snippet: {
      topLevelComment: { snippet },
      totalReplyCount,
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
        <StyledToolbarWithExpander>
          <CommentToolbar likeCount={snippet.likeCount} parentId={data.id} />
          {!!totalReplyCount && (
            <AnimateElement StyledComp={RoundedButton}>
              <div>
                <MoreDetails width="24px" height="24px" />
                <span>답글 {totalReplyCount}개</span>
              </div>
            </AnimateElement>
          )}
        </StyledToolbarWithExpander>
      </Content>
    </StyledComment>
  );
};

export default CommentItem;
