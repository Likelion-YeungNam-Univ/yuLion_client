import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
import styled from "styled-components";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  // 현재 경로가 '/authcomplete'일 경우를 확인합니다.
  const isAuthCompletePage = location.pathname === "/authcomplete";

  return (
    <Wrapper>
      <Header>
        <Logo src="/Logo.png" onClick={onClickLogo} />
        {/* '/authcomplete' 페이지가 아닐 때만 AdminButton 렌더링 */}
        {!isAuthCompletePage && (
          <AdminButton onClick={handleAdminClick}>Admin</AdminButton>
        )}
        {/* '/authcomplete' 페이지가 아닐 때만 Navbar 렌더링 */}
        {!isAuthCompletePage && (
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
              <LayoutProfileButton>프</LayoutProfileButton>
            </Nav>
          </Navbar>
        )}
      </Header>
      <Outlet />
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </Wrapper>
  );
};

export default Layout;

const LayoutProfileButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: 0;
`;
