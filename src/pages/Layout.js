import { Outlet, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Header,
  Logo,
  AdminButton,
  Nav,
  Navbar,
  NavItem,
  LinkItem,
} from "../styles/StyledLayout";

const Layout = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickAdmin = () => {
    navigate("/admin");
  };

  return (
    <Wrapper>
      <Header>
        <Logo src="/Logo.png" onClick={onClickLogo} />
        {/* TODO: 사용자에게 권한이 없을 시 관리자 페이지 이동 버튼은 없어야함! */}
        <AdminButton onClick={onClickAdmin}>Admin</AdminButton>
        <Navbar>
          <Nav>
            <NavItem>
              <LinkItem to="/">HOME</LinkItem>
            </NavItem>
            <NavItem>
              <LinkItem to="/about">ABOUT US</LinkItem>
            </NavItem>
            <NavItem>
              <LinkItem to="/post">POST</LinkItem>
            </NavItem>
            <NavItem>
              <LinkItem to="/people">PEOPLE</LinkItem>
            </NavItem>
            <NavItem>
              <LinkItem to="/signin">JOIN US</LinkItem>
            </NavItem>
          </Nav>
        </Navbar>
      </Header>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
