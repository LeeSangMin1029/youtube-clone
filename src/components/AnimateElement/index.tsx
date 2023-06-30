import { useMouseHandler } from '@/hooks';
import CoverInteract from '@/components/CoverInteract';
import { ReactNode, cloneElement } from 'react';
import { EmptyStyled } from './styles';
import { CustomMouseEvent } from '@/@types/global';

type AnimateElementProps = {
  children: ReactNode;
  Styled: (props: any) => JSX.Element;
  handleUp?: () => void;
  onClick?: (e: CustomMouseEvent) => void;
  isActivate?: boolean;
};

const AnimateElement = ({
  children,
  Styled,
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
        <EmptyStyled as={Styled} {...handler} onClick={onClick} />,
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
