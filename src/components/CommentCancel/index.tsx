import { useMouseHandler } from '@/hooks';
import { StyledButton } from '@/styles/utils';
import CoverInteract from '@/components/CoverInteract';

type CommentCancelProps = {
  handleUp: () => void;
};

const CommentCancel = ({ handleUp }: CommentCancelProps) => {
  const { mouse, ...handler } = useMouseHandler({ handleUp });

  return (
    <StyledButton>
      <span>취소</span>
      <CoverInteract {...handler} mouse={mouse} interact="immediate" />
    </StyledButton>
  );
};
export default CommentCancel;
