import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div``;

const Layout = () => {
  return (
    <div>
      <Header />
      layout
      <Outlet />
    </div>
  );
};

export default Layout;
