import { CustomMouseEvent } from '@/@types/global';
import AnimateElement from '@/components/AnimateElement';
import { RoundedButton } from '@/styles/utils';

type CommentCancelProps = {
  onClick: (e: CustomMouseEvent) => void;
};

const CommentCancel = ({ onClick }: CommentCancelProps) => {
  return (
    <AnimateElement StyledComp={RoundedButton} onClick={onClick}>
      <span>취소</span>
    </AnimateElement>
  );
};
export default CommentCancel;
