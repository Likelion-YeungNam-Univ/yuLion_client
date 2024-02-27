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
import { useState } from "react";
import AuthModal from "../components/modals/AuthModal";

const Layout = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const handleAdminClick = () => {
    if (!hasPermission) {
      setIsModalOpen(true);
    } else {
      navigate("/admin");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Header>
        <Logo src="/Logo.png" onClick={onClickLogo} />
        {/* TODO: 사용자에게 권한이 없을 시 관리자 페이지 이동 버튼은 없어야함! */}
        <AdminButton onClick={handleAdminClick}>Admin</AdminButton>
        <Navbar>
          <Nav>
            <NavItem>
              <LinkItem to="/">HOME</LinkItem>
            </NavItem>
            <NavItem>
              <LinkItem
                onClick={() => {
                  alert("준비중입니다..");
                }}
              >
                ABOUT US
              </LinkItem>
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
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </Wrapper>
  );
};

export default Layout;
