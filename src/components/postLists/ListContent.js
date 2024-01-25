import { useState } from "react";
import styled from "styled-components";
import ListPagination from "./ListPagination";

const ListContent = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <ListContentTable>
        <thead>
          <ListContentHeadTr>
            <ListContentHeadTh style={{ flex: 1.5 }}>번호</ListContentHeadTh>
            <ListContentHeadTh style={{ flex: 1.5 }}>대상</ListContentHeadTh>
            <ListContentHeadTh style={{ flex: 9 }}>제목</ListContentHeadTh>
            <ListContentHeadTh style={{ flex: 2 }}>작성자</ListContentHeadTh>
            <ListContentHeadTh style={{ flex: 3.5 }}>작성일</ListContentHeadTh>
            <ListContentHeadTh style={{ flex: 2 }}>조회수</ListContentHeadTh>
          </ListContentHeadTr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <ListContentBodyTr key={post.id}>
              <ListContentBodyTd style={{ flex: 1.5 }}>
                {post.number}
              </ListContentBodyTd>
              <ListContentBodyTd style={{ flex: 1.5 }}>
                {post.target}
              </ListContentBodyTd>
              <ListContentBodyTd style={{ flex: 9 }}>
                {post.title}
              </ListContentBodyTd>
              <ListContentBodyTd style={{ flex: 2 }}>
                {post.author}
              </ListContentBodyTd>
              <ListContentBodyTd style={{ flex: 3.5 }}>
                {post.date}
              </ListContentBodyTd>
              <ListContentBodyTd style={{ flex: 2 }}>
                {post.views}
              </ListContentBodyTd>
            </ListContentBodyTr>
          ))}
        </tbody>
      </ListContentTable>

      <ListContentPostBox>
        <ListContentPostButton>글쓰기</ListContentPostButton>
      </ListContentPostBox>
      <div>
        <ListPagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div>
        <ListContentSearchForm
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <ListContentSearchInput type="text" />
          <ListContentSearchButton type="submit" value={"search"} />
        </ListContentSearchForm>
      </div>
    </>
  );
};

export default ListContent;

const ListContentTable = styled.table`
  display: flex;
  flex-direction: column;
`;
const ListContentHeadTr = styled.tr`
  background: #656565;
  height: 48px;
  display: flex;
  align-items: center;
`;
const ListContentHeadTh = styled.th`
  color: #ffffff;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
`;
const ListContentBodyTr = styled.tr`
  display: flex;
`;
const ListContentBodyTd = styled.td`
  color: #656565;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListContentPostBox = styled.div`
  text-align: right;
`;
const ListContentPostButton = styled.button`
  border: 1px solid #a8a8a8;
  width: 79px;
  height: 32px;
  color: #1f1f1f;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
`;
const ListContentSearchForm = styled.form`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ListContentSearchInput = styled.input`
  width: 320px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ListContentSearchButton = styled.input`
  box-sizing: border-box;
  width: 79px;
  height: 40px;
  border: 1px solid #a8a8a8;
  background: #656565;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
`;
