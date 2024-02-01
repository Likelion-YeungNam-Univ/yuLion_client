import styled, { css } from "styled-components";
import { GRAY30, GRAY50, PRIMARY, WHITE } from "./GlobalStyle";

const HEADER_HEIGHT = "100px"

const SignupContainer = styled.div`
  max-width: 464px;
  height: calc(100dvh - ${HEADER_HEIGHT} - 36px);
  margin: auto;
  & form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & a{
    text-decoration: none;
  }

`
const SignupImg = styled.img`
  display: block;
  margin-top: 16px;
  margin-bottom: 40px;
`

const InputBox = styled.div`
`

const SignupInput = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  padding: 16px;
  font-size: 16px;
  color: ${GRAY50};
  box-sizing: border-box;
  border: 1px solid ${GRAY30};

  ${(props) => {
    if(props.type === "number"){
      return css`
        -moz-appearance: textfield;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `
    }
  }}

  ${(props) => {
    if(props.$loc === "top") {
      return css`
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 0;
        
      `
    } else if (props.$loc === "mid") {
      return css`
        border-bottom: 0;
      `
    } else if (props.$loc === "bottom") {
      return css`
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      `
    } else {
      return css`

      `
    }
  }}

  &::placeholder {
    color: ${GRAY30};
  }

  &:focus{
    outline: 0;
    border: 2px solid ${PRIMARY};
  }

  &:disabled {
    color: ${GRAY30};
  }

`

const GenderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 12px 7px;
  font-size: 16px;
  color: ${GRAY50};
  box-sizing: border-box;
  border: 1px solid ${GRAY30};
  border-bottom: 0;
`


const GenderItem = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  border: 1px solid ${GRAY30};
  margin: 0 2.5px;
  
  ${props => {
    if(props.$isSelect) {
      return css`
        color: ${PRIMARY};
        border: 1px solid ${PRIMARY};
      `
    }
  }}

`

const GenderRadioBtn = styled.input.attrs(props => ({
  type: "radio"
}))`
  display: none;
`


const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40px;
  margin: 4px 0;
`
const ErrorMsg = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: red;
  &::before{
    margin: 0px 8px;
    font-weight: 700;
    content: "·";
  }
`

const SignupBtn = styled.button`
  bottom: 0;
  bottom: 0;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
  min-height: 72px;
  color: ${WHITE};
  background-color: ${PRIMARY};
  margin-bottom: 16px;
  transition: 0.2s;
  &:disabled {
    background-color: ${GRAY30};
  }
`

export {
  SignupContainer,
  SignupImg,
  InputBox,
  SignupInput,
  GenderBox,
  GenderItem,
  GenderRadioBtn,
  ErrorBox,
  ErrorMsg,
  SignupBtn
}