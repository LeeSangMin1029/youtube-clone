import { MouseState, AnimationDelay } from '@/@types/global';
import { Interact } from './styles';
import { CSSProperties } from 'react';

type CoverInteractProps = {
  mouse: MouseState;
  interact?: AnimationDelay;
  customCSS?: CSSProperties;
};

const CoverInteract = ({
  interact,
  customCSS,
  ...props
}: CoverInteractProps) => {
  return (
    <Interact {...props}>
      <div className={`stroke ${interact}`} style={customCSS} />
      <div className={`fill ${interact}`} style={customCSS} />
    </Interact>
  );
};
export default CoverInteract;
