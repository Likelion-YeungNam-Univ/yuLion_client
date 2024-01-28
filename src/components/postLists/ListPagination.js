import styled from "styled-components";

const ListPagination = ({
  itemsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ListPaginationNav>
        <ListPaginationList>
          {pageNumbers.map((number) => (
            <ListPaginationItem key={number}>
              <ListPaginationLink
                onClick={() => paginate(number)}
                href="#"
                style={{
                  color: currentPage === number ? "#ff7710" : "#656565",
                  fontWeight: currentPage === number ? 700 : 400,
                }}
              >
                {number}
              </ListPaginationLink>
            </ListPaginationItem>
          ))}
        </ListPaginationList>
      </ListPaginationNav>
    </>
  );
};

export default ListPagination;

const ListPaginationNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ListPaginationList = styled.ul`
  list-style: none;
  width: 226px;
  height: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  padding: 0px;
`;
const ListPaginationItem = styled.li`
  display: flex;
`;
const ListPaginationLink = styled.a`
  text-decoration: none;
  font-family: "Pretendard";
  font-style: normal;
  font-size: 12px;
  line-height: 140%;
`;
