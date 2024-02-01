import styled from "styled-components";
import { GRAY30, GRAY50, PRIMARY, WHITE } from "./GlobalStyle";

// FIXME : Header의 Height를 임시적으로 적용
const HEADER_HEIGHT = "100px"

const SigninContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 464px;
  
  height: calc(100dvh - ${HEADER_HEIGHT} - 36px);

  margin: auto;
  & form{
    width: 100%;
  }

  & a{
    text-decoration: none;
  }

`

const SigninImg = styled.img`
  display: block;
  margin: auto;
  padding-bottom: 24px;
`

const InputWrap = styled.div`
  margin-bottom: 16px;
`
const SigninInput = styled.input`
  display: block;
  width: 100%;
  height: 72px;
  padding: 16px;
  font-size: 20px;
  color: ${GRAY50};
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${GRAY30};
  transition: 0.2s;

  &::placeholder {
    color: ${GRAY30};
  }

  &:focus{
    outline: 0;
    border: 1px solid ${PRIMARY};
  }

  &:disabled {
    color: ${GRAY30};
  }

`

const ErrorMsg = styled.span`
  font-size: 14px;
  color: red;
  &::before{
    margin: 0px 8px;
    font-weight: 700;
    content: "·";
  }
`

const KeepSigninBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
` 

const Span = styled.span`
  font-size: 16px;
  line-height: 16px;
  color: ${GRAY30};
`

const SpanWrap = styled.div`
  display: flex;
  justify-content: center;
`

const IconBtnWrap = styled.button`
  padding: 0;
  height: 24px;
  line-height: 24px;
  width: 24px;
  color: ${props => props.$isCheck ? PRIMARY : GRAY30};
  margin-right: 8px;
  font-size: 24px;
  background-color: inherit;
  border: none;
  transition: 0.4s;
  cursor: pointer;
`

const Btn = styled.button`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

const SignInBtn = styled(Btn)`
  width: 100%;
  height: 72px;
  color: ${WHITE};
  background-color: ${PRIMARY};
  margin-bottom: 16px;
  transition: 0.2s;
  &:disabled {
    background-color: ${GRAY30};
  }
`


const SignupBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`

const SignupBtn = styled(Btn)`
  width: 144px;
  height: 56px;
  border: 1px solid ${PRIMARY};
  color: ${PRIMARY};
  background-color: ${WHITE};
`

export {
  SigninContainer,
  SigninImg,
  InputWrap,
  SigninInput,
  ErrorMsg,
  KeepSigninBox,
  Span,
  SpanWrap,
  IconBtnWrap,
  SignInBtn,
  SignupBox,
  SignupBtn,
}