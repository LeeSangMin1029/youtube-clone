import { useMouseHandler } from '@/hooks';
import { StyledButton } from '@/styles/utils';
import CoverInteract from '@/components/CoverInteract';
import { CustomMouseEvent } from '@/@types/global';

type CommentCancelProps = {
  onClick: (e: CustomMouseEvent) => void;
};

const CommentCancel = ({ onClick }: CommentCancelProps) => {
  const { mouse, ...handler } = useMouseHandler();

  return (
    <StyledButton {...handler} onClick={onClick}>
      <span>취소</span>
      <CoverInteract mouse={mouse} interact="immediate" />
    </StyledButton>
  );
};
export default CommentCancel;
