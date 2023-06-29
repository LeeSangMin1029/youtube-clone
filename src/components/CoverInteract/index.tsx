import { MouseState, AnimationDelay } from '@/@types/global';
import { Interact } from './styles';
import { CSSProperties, memo, useRef } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  if (ref.current?.parentElement) {
    ref.current.parentElement.style.cursor = 'pointer';
  }
  return (
    <Interact {...props} ref={ref}>
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
export default memo(CoverInteract);
