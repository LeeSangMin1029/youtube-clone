import { LessDetails, MoreDetails } from '@/assets';
import SliderItem from '@/components/SliderItem';
import { ReactNode, memo, useState } from 'react';

type MenuMoreDetailProps = {
  children: ReactNode;
};

const MenuMoreDetail = ({ children }: MenuMoreDetailProps) => {
  const [more, setMore] = useState(false);
  return (
    <>
      {more && children}
      <SliderItem
        asset={more ? <LessDetails /> : <MoreDetails />}
        name={more ? '간략히 보기' : '더보기'}
        handleUp={() => setMore(!more)}
      />
    </>
  );
};

export default memo(MenuMoreDetail);
