import { useMenuContext } from '@/context/MenuContext';
import { Margin } from './styles';

type ExpandableMarginProps = {
  value: string;
};

const ExpandableMargin = ({ value }: ExpandableMarginProps) => {
  const { open } = useMenuContext();
  return <Margin expand={open} value={value} />;
};
export default ExpandableMargin;
