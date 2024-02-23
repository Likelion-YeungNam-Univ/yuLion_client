import styled from "styled-components";
import { GRAY30, WHITE, PRIMARY } from "../../styles/GlobalStyle";
import { BiX } from "react-icons/bi";

const DeleteIdPopup = ({ Delete }) => {
  const handleClose = () => {
    Delete();
  };

  return (
    <>
      <OverlayBox />
      <DeleteIdModalBox>
        <button type="button" className="close-btn" onClick={handleClose}><BiX/></button>
        <p>계정을 삭제하시겠습니까?</p>
        <button type="submit" className="submit-btn">확인</button>
      </DeleteIdModalBox>
    </>
  );
};

export default DeleteIdPopup;

const OverlayBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
`;

const DeleteIdModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${WHITE};
    z-index: 1001;
    height: 170px;
    width: 500px;

    .close-btn{
        font-size: 30px;
        background-color: inherit;
        border: none;
        color: ${GRAY30};
        cursor: pointer;
        position: absolute;
        right: 0px;
    }

    p {
        font-size: 20px;
        font-weight: 700;
        margin: 50px 10px 20px 10px;
    }

    .submit-btn {
        margin-top: 10px;
        width: 100px;
        height: 40px;
        color: ${WHITE};
        background-color: black;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            color: ${PRIMARY};
        }

    }
`;
