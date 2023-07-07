import { CustomMouseEvent } from '@/@types/global';
import { StyledLink } from './styles';
import { ReactNode } from 'react';

type CustomLinkProps = {
  to: string;
  children?: ReactNode;
};

const CustomLink = ({ to, children }: CustomLinkProps) => {
  const onClick = (e: CustomMouseEvent) => {
    e.stopPropagation();
  };
  return (
    <StyledLink onClick={onClick} to={to}>
      {children}
    </StyledLink>
  );
};
export default CustomLink;
