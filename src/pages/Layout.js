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


  const isAuthCompletePage = location.pathname === '/authcomplete';

  return (
    <Wrapper>
      <Header>
        <Logo src="/Logo.png" onClick={onClickLogo} />
        {!isAuthCompletePage && <AdminButton onClick={handleAdminClick}>Admin</AdminButton>}
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
