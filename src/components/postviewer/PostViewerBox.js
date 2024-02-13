import styled from "styled-components";
import CommentBox from "../comment/CommentBox";
import CommentUpdateBox from "../comment/CommentUpdateBox";

const PostViewer = () => {
  return (
    <PostContainer>
      <PostTitleContainer>
        <MovePostList href="/post">NOTICE {">"}</MovePostList>
        <PostTitle>제목</PostTitle>
        <PostInfo>
          <PostWriter>이름</PostWriter>
          <PostField>분야</PostField>
        </PostInfo>
        <PostInfoEtc>
          <PostDate>날짜</PostDate>
          <PostDate>조회</PostDate>
        </PostInfoEtc>
      </PostTitleContainer>
      <PostContext type='text'  placeholder="내용"/>
        <PostText>내용</PostText>
      {/* </PostContext> */}
      <CommentBox />
      <CommentUpdateBox />
    </PostContainer>
  );
};

export default PostViewer;

const PostContainer = styled.div`
  padding-left: 30px;
  padding-top: 32px;
  width: 1440px;
  // width: 1410px;
  height: 1179px;
  margin: 0 auto;
  border: 1px solid var(--Gray-20, #d1d1d1);
`;
const PostTitleContainer = styled.div`
  width: 1380px;
  // padding-left: 20px;
  padding-left: 20px;
`;

const MovePostList = styled.a`
  color: var(--Primary-color, #ff7710);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-decoration-line: none;
`;

const PostTitle = styled.h1`
  color: var(--gray-50-black, #1f1f1f);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 56px */
`;

const PostWriter = styled.h1`
  color: var(--gray-50-black, #1f1f1f);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-right: 16px;
`;

const PostField = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const PostInfo = styled.div`
  display: flex;
`;
const PostInfoEtc = styled.div`
  display: flex;
  width: 1380px;
  margin-bottom: 32px;
`;
const PostDate = styled.h1`
  color: var(--Gray-40, #656565);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-right: 16px;
`;
const PostContext = styled.input`
  height: 543px;
  //576
  width: 1380px;
  border-bottom: 1px solid #a8a8a8;
  border-top: 1px solid #a8a8a8;
  outline: none;
  border-right: none;
  border-left: none;
  
`;
const PostText = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-left: 20px;
  margin-top: 32px;
`;
