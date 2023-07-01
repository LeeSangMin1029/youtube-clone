import { ListItem, Content, AssetWrapper, AssetTitle } from './styles';
import { ReactNode, memo } from 'react';
import AnimateElement from '@/components/AnimateElement';

type SliderItemProps = {
  asset: ReactNode;
  name: string;
  handleUp?: () => void;
};

const SliderItem = ({ asset, name, handleUp }: SliderItemProps) => {
  return (
    <AnimateElement StyledComp={ListItem} handleUp={handleUp}>
      <Content>
        <AssetWrapper>{asset}</AssetWrapper>
        <AssetTitle>{name}</AssetTitle>
      </Content>
    </AnimateElement>
  );
};

export default memo(SliderItem);
