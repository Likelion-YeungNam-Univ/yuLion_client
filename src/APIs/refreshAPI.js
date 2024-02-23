import axios from "axios";

const refreshAPI = async() => {
  console.log('refreshAPI Call')
  const refreshToken = localStorage.getItem('refreshToken')
  const res = await axios.post( 
    '/api/v1/auth/token',
    null,
    { params: { refreshToken }}
  )
  console.log("refreshAPI res : ", res)
  return res
}

export default refreshAPI
