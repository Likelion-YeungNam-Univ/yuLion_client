import styled from "styled-components";

const PostSearchBar = () => {
  return (
    <SearchContainer>
      <SearchBarContainer>
        <SearchInput />
        <SearchButton>search</SearchButton>
      </SearchBarContainer>
      <PostViewerButton>
        <NextButton>다음글</NextButton>
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
  gap: 16px;
  flex-shrink: 0;
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
const NextButton = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: rgba(255, 119, 16, 0.2);
  color: var(--Primary-color, #ff7710);
  /* Body/14px/140%/semibold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  border: none;
`;
const PostListButton = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Primary-color, #ff7710);
  /* Body/14px/140%/semibold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  border-radius: 5px;
  background: rgba(255, 119, 16, 0.2);
  border: none;
  margin-left: 24px;
`;
const SearchContainer = styled.div`
  margin-right: 240px;
  margin-top: 61px;
  //   float: right;
`;
