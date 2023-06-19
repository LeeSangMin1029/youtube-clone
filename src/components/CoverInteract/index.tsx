import { MouseState, AnimationDelay } from '@/@types/global';
import { Interact } from './styles';
import { CSSProperties } from 'react';

type CoverInteractProps = {
  mouse: MouseState;
  interact?: AnimationDelay | null;
  customCSS?: CSSProperties;
};

const CoverInteract = ({
  interact,
  customCSS,
  ...props
}: CoverInteractProps) => {
  return (
    <Interact {...props}>
      <div
        className={`${interact ? 'stroke ' + interact : 'stroke'}`}
        style={customCSS}
      />
      <div
        className={`${interact ? 'fill ' + interact : 'fill'}`}
        style={customCSS}
      />
    </Interact>
  );
};
export default CoverInteract;
