import { Main } from './styles';

type ChildrenProps = {
  children: React.ReactElement;
};

const Content = ({ children }: ChildrenProps) => {
  return <Main>{children}</Main>;
};

export default Content;
