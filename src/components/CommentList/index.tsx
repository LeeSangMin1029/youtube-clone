import { YoutubeCommentsList } from '@/@types/youtube';
import { useUserContext } from '@/context/UserContext';
import { fetchPost, randomKey } from '@/utils';
import { commentsKeys } from '@/utils/reactQueryKeys';
import { useQuery } from 'react-query';
import CommentItem from '@/components/CommentItem';

type CommentListProps = {
  id: string;
};

const CommentList = ({ id }: CommentListProps) => {
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
    <>
      {comments?.items.map((comment) => (
        <CommentItem key={randomKey()} data={comment} />
      ))}
    </>
  );
};

export default CommentList;
