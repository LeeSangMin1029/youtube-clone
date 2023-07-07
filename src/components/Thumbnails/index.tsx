import { Image } from './styles';
import { ReactNode } from 'react';
import CustomLink from '../CustomLink';

type ThumbnailsProps = {
  width: string;
  height: string;
  alt: string;
  source: string;
  to: string;
  children?: ReactNode;
};

const Thumbnails = ({
  width,
  height,
  source,
  to,
  children,
}: ThumbnailsProps) => {
  return (
    <CustomLink to={to}>
      <Image width={width} height={height} src={source} />
      {children}
    </CustomLink>
  );
};

export default Thumbnails;
