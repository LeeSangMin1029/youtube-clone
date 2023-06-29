import { useUserContext } from '@/context/UserContext';
import { commentsKeys } from '@/utils/reactQueryKeys';
import { useQuery } from 'react-query';
import { fetchPost } from '@/utils';
import { CommentCount, StyledComments } from './styles';
import { YoutubeCommentsList } from '@/@types/youtube';
import CommentForm from '@/components/CommentForm';

type CommentsProps = {
  id: string;
  count: string;
};

const Comments = ({ id, count }: CommentsProps) => {
  const {
    user: { googleID },
  } = useUserContext();
  const { data: comments } = useQuery({
    queryKey: [...commentsKeys.lists(), googleID, id],
    queryFn: async () =>
      await fetchPost<YoutubeCommentsList>('comments', {
        googleID,
        params: { videoId: [id] },
      }),
  });

  return (
    <StyledComments>
      <CommentCount>
        <div>댓글 {count}개</div>
      </CommentCount>
      <CommentForm isReply={false} id={id} />
    </StyledComments>
  );
};

export default Comments;
