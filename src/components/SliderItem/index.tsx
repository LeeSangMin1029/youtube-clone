import { useMouseHandler } from '@/hooks';
import { Item, Content } from './styles';
import CoverInteract from '@/components/CoverInteract';
import { memo } from 'react';

type SliderItemProps = {
  children: any;
  name: string;
};

const SliderItem = ({ name, children }: SliderItemProps) => {
  const { mouse, ...handler } = useMouseHandler();

  return (
    <Item {...handler}>
      <CoverInteract mouse={mouse} interact="immediate" />
      <Content>
        <div>{children}</div>
        <span>{name}</span>
      </Content>
    </Item>
  );
};

export default memo(SliderItem);
