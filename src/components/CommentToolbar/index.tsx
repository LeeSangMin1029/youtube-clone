import { BaseButton, RoundedButton } from '@/styles/utils';
import { BriefInteract, StyledToolbar, ReplyBtnLetter } from './styles';
import { DislikeThumb, LikeThumb } from '@/assets';
import AnimateElement from '@/components/AnimateElement';
import CommentForm from '@/components/CommentForm';
import { useState } from 'react';

type CommentToolbarProps = {
  likeCount: number;
  parentId: string;
};

const CommentToolbar = ({ likeCount, parentId }: CommentToolbarProps) => {
  const [replyOpen, setOpen] = useState(false);
  const onClick = () => setOpen(!replyOpen);
  return (
    <>
      <StyledToolbar>
        <BriefInteract>
          <AnimateElement StyledComp={BaseButton}>
            <LikeThumb width="24px" height="24px" />
          </AnimateElement>
          <AnimateElement StyledComp={BaseButton}>
            <DislikeThumb width="24px" height="24px" />
          </AnimateElement>
        </BriefInteract>
        <AnimateElement StyledComp={RoundedButton} onClick={onClick}>
          <ReplyBtnLetter>답글</ReplyBtnLetter>
        </AnimateElement>
      </StyledToolbar>
      {replyOpen && <CommentForm isReply={true} id={parentId} />}
    </>
  );
};

export default CommentToolbar;
