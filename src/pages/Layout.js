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
import { useState, useEffect } from "react";
import AuthModal from "../components/modals/AuthModal";
import styled from "styled-components";
import getUserProfilAPI from "../APIs/getUserProfileAPI";
import logout from "../auth/logout";
import refresh from "../auth/refresh";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickLogo = () => {
    navigate("/");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [nickname, setNickname] = useState(null)

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

  // FIXME
  // logout 관련 핸들러
  // 일단 localstorage에서 토큰 값을 제거하는 방식으로만 구현
  // 이후 Backend와 소통 후 로그아웃 관련 API 연결 필요
  const handleLogout = async() => {
    logout()
    setNickname(null)
    window.location.replace('/')
  }

  // 현재 경로가 '/authcomplete'일 경우를 확인합니다.
  const isAuthCompletePage = location.pathname === "/authcomplete";

  // 사이트 방문 시 local storage에 access token이 존재하는 경우
  // 프로필 데이터를 받아와 화면에 출력
  useEffect(() => {
    const fetch = async() => {
      try {
        const res = await getUserProfilAPI()
        setNickname(res.data.nickname)
      } catch (error1) {
        console.error(error1)
        console.error('getUserProfilAPI() Error. Try Refresh')
        try {
          const res = await refresh(getUserProfilAPI)
          setNickname(res.data.nickname)
        } catch (error2) {
          console.error(error1)
          console.error('Refresh Error')
        }
      }
    }
    localStorage.getItem('accessToken') && fetch()
  },[])

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
                {/* nickname 존재 시 로그인 버튼은 로그아웃 버튼으로 변경*/}
                {nickname ? 
                (<LinkItem 
                  onClick={handleLogout}>
                  Logout
                </LinkItem>) :
                (<LinkItem to="/signin">JOIN US</LinkItem>)
                }
              </NavItem>
              {/* nickname 존재 시 프로필 버튼 보이게 하기*/}
              {nickname && (<LayoutProfileButton>
                {nickname}
              </LayoutProfileButton>)}
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
