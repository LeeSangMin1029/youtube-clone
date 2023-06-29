import { CommentCount, StyledComments, CommentHeader } from './styles';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';
import ErrorBoundarySuspense from '../ErrorBoundarySuspense';
import Fallback from '../Fallback';

type CommentsProps = {
  id: string;
  count: string;
};

const Comments = ({ id, count }: CommentsProps) => {
  return (
    <StyledComments>
      <CommentHeader>
        <CommentCount>댓글 {count}개</CommentCount>
        <CommentForm isReply={false} id={id} />
      </CommentHeader>
      <ErrorBoundarySuspense Fallback={Fallback} Loading={<></>}>
        <CommentList id={id} />
      </ErrorBoundarySuspense>
    </StyledComments>
  );
};

export default Comments;
