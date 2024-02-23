import refreshAPI from "../APIs/refreshAPI";

const refresh = async(callback) => {
  const res = await refreshAPI()
  localStorage.setItem('accessToken', res.data.accessToken)
  localStorage.setItem('refreshToken', res.data.accessToken)
  return callback ? await callback() : null
}

export default refresh