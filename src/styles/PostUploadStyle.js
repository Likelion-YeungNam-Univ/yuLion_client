import styled from 'styled-components'
import { GRAY20, GRAY30, PRIMARY, WHITE } from './GlobalStyle'

const Container = styled.div`
  width: 1440px;
  max-width: calc(100vw - 32px);
  margin: auto;
`

const Divider = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  height: 1px;
  background-color: ${GRAY30};
`

const HeadBox = styled.div`
  border: 1px solid ${GRAY20};
  border-radius: 15px;
  padding: 16px;
  margin-bottom: 25px;
`

const DropdownBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
`

const DropdownWrap = styled.div`
  width: calc(50% - 8px);
`

const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  border: 1px solid ${GRAY20};

  &::placeholder {
    color: ${GRAY30};
  }

  &:focus{
    outline: 0;
    border: 2px solid ${PRIMARY};
  }
`
const SubmitBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

const SubmitBtn = styled.button`
  margin-top: 25px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 50%;
  height: 36px;
  color: ${WHITE};
  background-color: ${PRIMARY};
  margin-bottom: 16px;
  transition: 0.2s;
  &:disabled {
    background-color: ${GRAY30};
  }
`

export {
  Container,
  Divider,
  HeadBox,
  DropdownBox,
  DropdownWrap,
  TitleInput,
  SubmitBtnWrap,
  SubmitBtn
}