import signinAPI from "../APIs/singinAPI";

const signin = async(data) => {
  const res = await signinAPI(data)
  // 로그인 성공 시 받은 Token을 local storage에 저장
  localStorage.setItem("accessToken", res.data.accessToken)
  localStorage.setItem("refreshToken", res.data.refreshToken)
}

export default signin