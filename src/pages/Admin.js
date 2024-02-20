import styled from "styled-components";
import Label from "../components/Label";

const Admin = () => {
  const approvalName = ["윤수민", "최지우", "김서윤", "박서현", "한지민"];
  const managementName = ["윤수민", "최지우", "김서윤", "박서현", "한지민"];

  const authorization = ["아기사자", "운영진"];

  console.log("API Fetch");

  return (
    <>
      <AdminGridBox>
        <div>
          <Label children={"APPROVAL"} />
          <AdminList>
            {approvalName.map((name) => (
              <AdminItemBox>
                <AdminItem>{name}</AdminItem>
                <div style={{ marginLeft: "400px" }}>{authorization[0]}</div>
                <AdminButtonBox>
                  <AdminButton
                    style={{ border: "1px solid #1877f2", color: "#1877f2" }}
                  >
                    승인
                  </AdminButton>
                  <AdminButton
                    style={{ border: "1px solid #EA4335", color: "#EA4335" }}
                  >
                    거절
                  </AdminButton>
                </AdminButtonBox>
              </AdminItemBox>
            ))}
          </AdminList>
        </div>
        <div>
          <Label children={"MANAGEMENT"} />
          <AdminList>
            {managementName.map((name) => (
              <AdminItemBox>
                <AdminItem>{name}</AdminItem>
                <div style={{ marginLeft: "400px" }}>{authorization[1]}</div>
                <AdminButtonBox>
                  <AdminButton
                    style={{ border: "1px solid #1877f2", color: "#1877f2" }}
                  >
                    승인
                  </AdminButton>
                  <AdminButton
                    style={{ border: "1px solid #EA4335", color: "#EA4335" }}
                  >
                    거절
                  </AdminButton>
                </AdminButtonBox>
              </AdminItemBox>
            ))}
          </AdminList>
        </div>
      </AdminGridBox>
    </>
  );
};

export default Admin;

const AdminGridBox = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 851px 851px;
  grid-template-rows: minmax(190px, auto);
  grid-column-gap: 70px;
  grid-row-gap: 20px;
`;
const AdminList = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
  margin-top: 15px;
`;
const AdminItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
`;
const AdminItem = styled.li`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #656565;
`;
const AdminButtonBox = styled.div`
  display: flex;
  gap: 8px;
`;
const AdminButton = styled.button`
  border-radius: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  background-color: white;
`;
