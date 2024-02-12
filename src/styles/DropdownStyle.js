import styled, { css } from 'styled-components'
import { GRAY20, GRAY50, WHITE } from "./GlobalStyle";

const DropdownContainer = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 33px;
  border: 1px solid ${GRAY20};
  color: ${GRAY50};
  border-radius: 8px;
`

const DropdownTrigger= styled.div`
  position: relative;
  cursor: pointer;
  padding: 0 16px;
  
`

const DropdownMenu = styled.div`
  transform: translateY(5px);
  position: absolute;
  z-index: 5;
  transition: 0.2s;
  background-color: ${WHITE};
  width: 204px;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.25);
  border-radius: 8px;
  ${(props) => {
    if(!props.$isOpen) {
      return css`
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
      `
    }
  }}

  &:focus{
   background-color: red; 
  }

`

const DropdownItem = styled.div`
  padding: 0 8px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`

export { 
  DropdownContainer,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
}