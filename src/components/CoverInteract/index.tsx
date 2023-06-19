import { MouseState, VariantShape } from '@/@types/global';
import { Interact } from './styles';

type CoverInteractProps = {
  mouse: MouseState;
  variant: VariantShape;
};

const CoverInteract = ({ variant, ...props }: CoverInteractProps) => {
  return (
    <Interact {...props}>
      <div className={`stroke ${variant}`} />
      <div className={`fill ${variant}`} />
    </Interact>
  );
};
export default CoverInteract;
