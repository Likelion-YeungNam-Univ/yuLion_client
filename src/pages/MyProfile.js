import styled from "styled-components";
import { GRAY30, PRIMARY, WHITE } from "../styles/GlobalStyle";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const MyProfile = () => {
    const [disabled, setDisabled]=useState(false);
    const toggleDisabled = () => {
        setDisabled(!disabled);
    };

    return (
        <PorfileForm>
            <UserImgBox>
                <img src="http://via.placeholder.com/160" alt="이미지"/>
            </UserImgBox>
            <ProfileInputBox>
                <input type="email" 
                        disabled 
                        placeholder="아이디(이메일)" 
                        value={"hong@gmail.com"}/>
                <input type="text" placeholder="GitHub 주소"/>
            </ProfileInputBox>
            <ProfileInputBox>
                <input type="text" placeholder="이름"/>
                <input type="number" placeholder="생년월일 8자리"/>
                <input type="number" placeholder="휴대전화번호"/>
            </ProfileInputBox>
            <DisableBox $isDisabled={disabled}>
                <button type="button"
                        onClick={toggleDisabled}>
                    {disabled ? <FaCheckCircle /> : <FaRegCheckCircle />}
                </button>
                <p>계정 비활성화</p>
            </DisableBox>
            <button  className="profile-submit-btn"
                    type="submit">수정하기</button>
        </PorfileForm>
    )
}

export default MyProfile;

const PorfileForm = styled.form`
    width: 464px;
    margin: auto;
    margin-top: 40px;

    .profile-submit-btn{
        margin-top: 60px;
        width: 464px;
        height: 60px;
        border-radius: 7px;
        border: none;
        background-color: ${GRAY30};
        color: ${WHITE};
        font-size: 18px;
        font-weight: 550;
    }
`;

const UserImgBox = styled.div`
    text-align: center;

    img{
        border-radius: 100%;
    }
`;

const ProfileInputBox = styled.div`
    margin-top: 40px;
    border: 1px solid ${GRAY30};
    border-radius: 7px;
    overflow: hidden;

    input{
        display: flex;
        width: 464px;
        height: 56px;
        padding: 16px;
        font-size: 16px;
        border: none;
        
        &:not(:last-child) {
            border-bottom: 1px solid ${GRAY30};
        }
        &:focus {
            outline: none;
        }

        &[type="number"]::-webkit-inner-spin-button,
        &[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            appearance: none;
            margin: 0;
        }
    }
`;

const DisableBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;

    button{
        color: ${props => props.$isDisabled ? PRIMARY : GRAY30};
        font-size: 24px;
        background-color: inherit;
        border: none;
        transition: 0.4s;
        cursor: pointer;
    }

    p{  
        color: ${GRAY30};
        font-size: 16px;
    }
`;

