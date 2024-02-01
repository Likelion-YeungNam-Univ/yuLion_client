import styled from "styled-components";
import ListContent from "../components/postLists/ListContent";
import ListTitle from "../components/postLists/ListTitle";

const PostList = () => {
  const posts = [
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
    {
      id: 1,
      number: 1,
      target: "전체",
      title: "첫 번째 공지사항",
      author: "개발자1",
      date: "2024-01-25",
      views: 10,
    },
  ];

  console.log("테이블 Fetch");

  return (
    <>
      <PostListLayout>
        <PostListBox>
          <ListTitle title="NOTICE" />
          <ListContent posts={posts} />
        </PostListBox>
      </PostListLayout>
    </>
  );
};

export default PostList;

const PostListLayout = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const PostListBox = styled.div`
  width: 100%;
  border-collapse: collapse;
`;
