import styled from "styled-components";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      {isOpen && (
        <AuthModalLayout onClick={(e) => e.stopPropagation}>
          <AuthModalBox>
            <AuthModalParagragh>
              죄송합니다. 이 페이지에 접근할 권한이 없습니다.
            </AuthModalParagragh>
            <AuthModalButton
              onClick={onClose}
              isHovered={isHovered}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              홈화면 바로가기
              <GoArrowUpRight size="30" style={{ marginLeft: 10 }} />
            </AuthModalButton>
          </AuthModalBox>
        </AuthModalLayout>
      )}
    </>
  );
};

export default AuthModal;
const AuthModalLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
const AuthModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  background: #ffffff;
  padding: 20px;
  z-index: 9999;
  width: 776px;
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AuthModalParagragh = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #000000;
  margin-bottom: 30px;
`;
const AuthModalButton = styled.button`
  padding: 22px 33px;
  background: #1f1f1f;
  border-radius: 15px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${({ isHovered }) => (isHovered ? "#FF7710" : "#ffffff")};
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
AuthModalButton.defaultProps = {
  isHovered: false,
};
