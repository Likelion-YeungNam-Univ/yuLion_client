import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.img`
  width: 278px;
  height: 21px;
  flex-shrink: 0;
  margin-right: 64px;
  cursor: pointer;
`;
export const AdminButton = styled.button`
  border-radius: 20px;
  border: 2px solid var(--Gray-40, #656565);
  margin-right: 200px;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  align-items: right;
`;
export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;
export const NavItem = styled.li`
  margin: 0 64px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  &:hover {
    color: #ff7710;
  }
`;
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: black;
  cursor: pointer;
  &:hover {
    color: #ff7710;
  }
`;
