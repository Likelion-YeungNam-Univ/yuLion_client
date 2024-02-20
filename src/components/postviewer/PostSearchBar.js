import styled from "styled-components";
import { PRIMARY } from "../../styles/GlobalStyle.js";

const PostSearchBar = () => {
  return (
    <SearchContainer>
      <SearchBarContainer>
        <SearchInput />
        <SearchButton>search</SearchButton>
      </SearchBarContainer>
      <PostViewerButton>
        <PostListButton>다음글</PostListButton>
        <PostListButton>목록</PostListButton>
      </PostViewerButton>
    </SearchContainer>
  );
};

export default PostSearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  // float: right;
  margin-bottom: 24px;
`;
const SearchInput = styled.input`
  display: flex;
  width: 415px;
  height: 40px;
  justify-content: center;
  align-items: flex-start;
  outline: none;
`;

const SearchButton = styled.button`
  display: flex;
  padding: 6px 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  background: var(--Gray-40, #656565);
  margin-left: 16px;
`;
const PostViewerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  // float: right;
`;
const PostListButton = styled.button`
  margin-left: 24px;
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background:rgba(255, 119, 16, 0.2);
  color:${PRIMARY};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  border: none;
`;

const SearchContainer = styled.div`
  margin-right: 240px;
  margin-top: 61px;
`;
