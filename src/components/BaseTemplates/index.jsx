import { Outlet } from "react-router";
import Header from "@/components/Header";
import Content from "@/components/Content";

const BaseTemplates = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default BaseTemplates;
