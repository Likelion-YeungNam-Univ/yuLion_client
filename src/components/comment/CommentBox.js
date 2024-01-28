import styled from "styled-components";

const CommentBox = () => {
  return (
    <CommentContainer>
      <Comment>댓글</Comment>
      <CommentWriter>이름</CommentWriter>
      <CommentContext>댓글 내용</CommentContext>
      <CommentDate>날짜</CommentDate>
    </CommentContainer>
  );
};

export default CommentBox;

const Comment = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 25px;
  margin-top: 16px;
`;
const CommentContainer = styled.div`
  width: 1380px;
  height: 197px;
  margin-left: 20px;
`;
const CommentWriter = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 16px;
`;
const CommentContext = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 16px;
`;
const CommentDate = styled.h1`
  color: var(--Gray-40, #656565);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
