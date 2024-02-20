// import {
//     CommentContainer,
//     CommentWriter,
//     CommentContext,
//     CommentDate
//   } from "../../styles/StyledComment.js";
import styled from "styled-components";

const CommentBox = () => {
  return (
    <CommentContainer>
      <CommentWriter>이름</CommentWriter>
      <CommentInputField type="text" name="username" placeholder="댓글내용" />
      {/* <CommentContext>댓글 내용</CommentContext> */}
      <CommentUpdate>등록</CommentUpdate>
    </CommentContainer>
  );
};

export default CommentBox;

const CommentContainer = styled.div`
  width: 1380px;
  height: 148px;
  border-radius: 5px;
  border: 2px solid var(--Gray-20, #d1d1d1);
`;
const CommentWriter = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-left: 22px;
  margin-top: 16px;
`;
const CommentInputField = styled.input`
  // border: none;
  color: var(--Gray-30, #a8a8a8);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-left: 22px;
  // outline: none;
  width: 1332px;
  height: 70px;
  border: pink;
  outline: none;
`;
const CommentUpdate = styled.button`
  color: var(--Gray-30, #a8a8a8);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  float: right;
  margin-right: 24px;
  border: none;
  background: none;
`;
