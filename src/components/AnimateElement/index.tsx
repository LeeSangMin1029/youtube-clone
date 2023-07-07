import { useMouseHandler } from '@/hooks';
import CoverInteract from '@/components/CoverInteract';
import { ElementType, ReactNode } from 'react';
import { EmptyStyled } from './styles';
import { AnimationDelay, CustomMouseEvent } from '@/@types/global';

type AnimateElementProps = {
  children: ReactNode;
  StyledComp?: ElementType;
  handleUp?: () => void;
  onClick?: (e: CustomMouseEvent) => void;
  isActivate?: boolean;
  interact?: AnimationDelay;
};

const AnimateElement = ({
  children,
  StyledComp,
  handleUp,
  onClick,
  isActivate = true,
  interact = 'immediate',
}: AnimateElementProps) => {
  const { mouse, ...handler } = useMouseHandler({
    handleUp: () => handleUp && handleUp(),
  });

  return (
    <EmptyStyled as={StyledComp} {...handler} onClick={onClick}>
      {isActivate && <CoverInteract mouse={mouse} interact={interact} />}
      {children}
    </EmptyStyled>
  );
};

export default AnimateElement;
