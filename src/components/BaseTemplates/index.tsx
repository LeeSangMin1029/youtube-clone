import { Outlet } from 'react-router';
import Header from '@/components/Header';
import Content from '@/components/Content';
import SliderMenu from '@/components/SliderMenu';
import UserProvider from '@/context/UserContext';
import MenuProvider from '@/context/MenuContext';

const BaseTemplates = () => {
  return (
    <UserProvider>
      <MenuProvider>
        <Header />
        <Content>
          <>
            <SliderMenu />
            <Outlet />
          </>
        </Content>
      </MenuProvider>
    </UserProvider>
  );
};

export default BaseTemplates;
