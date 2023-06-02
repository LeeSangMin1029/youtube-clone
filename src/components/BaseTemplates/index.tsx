import { Outlet } from 'react-router';
import Header from '@/components/Header';
import Content from '@/components/Content';
import UserProvider from '@/context/UserContext';

const BaseTemplates = () => {
  return (
    <UserProvider>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </UserProvider>
  );
};

export default BaseTemplates;
