import { useMouseHandler } from '@/hooks';
import { Item, Content } from './styles';
import CoverInteract from '@/components/CoverInteract';

type SliderItemProps = {
  children: any;
  name: string;
};

const SliderItem = ({ name, children }: SliderItemProps) => {
  const { mouse, ...handler } = useMouseHandler();

  return (
    <Item {...handler}>
      <CoverInteract mouse={mouse} variant="rect" />
      <Content>
        <div>{children}</div>
        <span>{name}</span>
      </Content>
    </Item>
  );
};

export default SliderItem;
