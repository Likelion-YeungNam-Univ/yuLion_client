import styled from "styled-components";
import "../styles/GlobalStyle.js";
import { PRIMARY, GRAY50 } from "../styles/GlobalStyle.js";
import {Link} from "react-router-dom";

const AuthComplete = () => {
  return (
    <AuthCompleteContainer>
      <CompleteContainer>
        <Likelionlogo src="likelion-logo.png"></Likelionlogo>
        <WelcomeComment color={PRIMARY} margin={"139px"} lineheight={"140%"}>
          홍길동님,
        </WelcomeComment>
        {/* <WelcomeComment>님,</WelcomeComment> */}
        <br />
        <WelcomeComment>만나서 반가워요!</WelcomeComment>
        <SubtitleComment margintop={"91px"}>사람과 기술을 연결하다.</SubtitleComment>
        <br />
        <SubtitleComment marginbottom={"48px"}>Connecting people and technology.</SubtitleComment>
        <ShortcutButton to='/'>홈화면 바로가기</ShortcutButton>
        <Completeicon src="complete-icon.png"></Completeicon>
      </CompleteContainer>
    </AuthCompleteContainer>
  );
};

export default AuthComplete;

const AuthCompleteContainer = styled.div`
  height: 1080px;
  background: linear-gradient(white, ${PRIMARY});
`;

const Likelionlogo = styled.img`
  width: 232px;
  height: 18px;
  margin-left: 58px;
  margin-top: 16px;
`;

const Completeicon = styled.img`
  width: 580px;
  height: 426px;
`;

const CompleteContainer = styled.div`
  width: 580px;
  margin: 0px auto;
`;
const ShortcutButton = styled(Link)`
  background: ${GRAY50};
  border-radius: 15px;
  color: white;
  width: 232px;
  height: 74px;
  margin-left: 174px;
  margin-bottom: 30px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  text-decoration: none; 
  &:hover {
    color: ${PRIMARY}; 
    text-decoration: none;
  }
`;


const WelcomeComment = styled.h1`
  color: ${(props) => props.color};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: ${(props) => props.lineheight}
  align-items: center;
  text-align: center;
  width: 598px;
  margin-top: ${(props) => props.margin};
`;

const SubtitleComment = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  align-items: center;
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
`;
