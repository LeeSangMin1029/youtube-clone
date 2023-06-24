import { useMouseHandler } from '@/hooks';
import { Item, Content, AssetWrapper, AssetTitle } from './styles';
import CoverInteract from '@/components/CoverInteract';
import { ReactNode, memo } from 'react';

type SliderItemProps = {
  asset: ReactNode;
  name: string;
  handleUp?: () => void;
};

const SliderItem = ({ asset, name, handleUp }: SliderItemProps) => {
  const { mouse, ...handler } = useMouseHandler({
    handleUp: handleUp ? handleUp : () => {},
  });

  return (
    <Item {...handler}>
      <CoverInteract mouse={mouse} interact="immediate" />
      <Content>
        <AssetWrapper>{asset}</AssetWrapper>
        <AssetTitle>{name}</AssetTitle>
      </Content>
    </Item>
  );
};

export default memo(SliderItem);
