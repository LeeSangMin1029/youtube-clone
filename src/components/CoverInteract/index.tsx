import { MouseState, AnimationDelay } from '@/@types/global';
import { Interact } from './styles';
import { memo } from 'react';

type CoverInteractProps = {
  mouse: MouseState;
  interact?: AnimationDelay | null;
};

const CoverInteract = ({ interact, ...props }: CoverInteractProps) => {
  return (
    <Interact {...props}>
      <div className={`stroke ${interact}`} />
      <div className={`fill ${interact}`} />
    </Interact>
  );
};
export default memo(CoverInteract);
