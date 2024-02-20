import PostSearchBar from "../components/postviewer/PostSearchBar";
import PostViewerBox from "../components/postviewer/PostViewerBox";
import styled from "styled-components";
import { GRAY50, GRAY20 } from "../styles/GlobalStyle.js";

const PostViewer = () => {
  return (
    <div>
      <PostSearchBar />
      <PostViewerBox />
      <PostViewrBottomButton>
        <PostListBottomButton >목록</PostListBottomButton>
        <PostListBottomButton>TOP</PostListBottomButton>
      </PostViewrBottomButton>
    </div>
  );
};

export default PostViewer;

const PostViewrBottomButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  margin-right: 270px;
  margin-top: 20px;
`;
const PostListBottomButton = styled.button`
  margin-left: 24px;
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background:${GRAY20};
  color:${GRAY50};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  border: none;
`;
