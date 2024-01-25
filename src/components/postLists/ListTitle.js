import styled from "styled-components";

const ListTitle = ({ title }) => {
  return (
    <>
      <ListTitleLayout>
        <ListTitleSpan></ListTitleSpan>
        <ListTitleHead>{title}</ListTitleHead>
      </ListTitleLayout>
      <ListTitleHr />
    </>
  );
};

export default ListTitle;

const ListTitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;
const ListTitleSpan = styled.span`
  width: 5px;
  height: 16px;
  background: #ff7710;
`;
const ListTitleHead = styled.h3`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #656565;
  margin: 0px;
`;
const ListTitleHr = styled.hr`
  height: 1px;
  background: #d9d9d9;
  margin: 0 0 30px 0;
`;
