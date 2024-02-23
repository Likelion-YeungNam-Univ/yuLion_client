import axios from "axios";
import refresh from "../auth/refresh";
const getUserProfilAPI = async() => {
  console.log("getUserProfilAPI Call")
  const accessToken = localStorage.getItem('accessToken')
  const res = await axios.get(
    '/api/v1/users/me/profiles',
    {headers: {
      Authorization: 'Bearer ' + accessToken
    }}
  )
  console.log("getUserProfilAPI res : ", res)
  return res
}

export default getUserProfilAPI