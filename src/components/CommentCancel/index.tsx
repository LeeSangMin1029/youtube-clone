import { CustomMouseEvent } from '@/@types/global';
import { StyledExtendButton } from './styles';
import AnimateElement from '@/components/AnimateElement';

type CommentCancelProps = {
  onClick: (e: CustomMouseEvent) => void;
};

const CommentCancel = ({ onClick }: CommentCancelProps) => {
  return (
    <AnimateElement StyledComp={StyledExtendButton} onClick={onClick}>
      <span>취소</span>
    </AnimateElement>
  );
};
export default CommentCancel;
