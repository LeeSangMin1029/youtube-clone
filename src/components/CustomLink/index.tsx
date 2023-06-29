import { CustomMouseEvent } from '@/@types/global';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CustomLinkProps = {
  to: string;
  children?: ReactNode;
};

const CustomLink = ({ to, children }: CustomLinkProps) => {
  const onClick = (e: CustomMouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Link onClick={onClick} to={to}>
      {children}
    </Link>
  );
};
export default CustomLink;
