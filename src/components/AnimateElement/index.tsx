import { useMouseHandler } from '@/hooks';
import CoverInteract from '@/components/CoverInteract';
import { ElementType, ReactNode, cloneElement } from 'react';
import { EmptyStyled } from './styles';
import { CustomMouseEvent } from '@/@types/global';

type AnimateElementProps = {
  children: ReactNode;
  StyledComp?: ElementType;
  handleUp?: () => void;
  onClick?: (e: CustomMouseEvent) => void;
  isActivate?: boolean;
};

const AnimateElement = ({
  children,
  StyledComp,
  handleUp,
  onClick,
  isActivate = true,
}: AnimateElementProps) => {
  const { mouse, ...handler } = useMouseHandler({
    handleUp: () => handleUp && handleUp(),
  });

  return (
    <>
      {cloneElement(
        <EmptyStyled as={StyledComp} {...handler} onClick={onClick} />,
        {
          children: (
            <>
              {isActivate && (
                <CoverInteract mouse={mouse} interact="immediate" />
              )}
              {children}
            </>
          ),
        },
      )}
    </>
  );
};

export default AnimateElement;
