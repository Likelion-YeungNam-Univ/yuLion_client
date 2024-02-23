import axios from "axios";
const signinAPI = async(data) => {
  console.log('signinAPI Call')
  const res = await axios.post( 
    '/api/v1/auth/login',
    data,
  )
  console.log("signinAPI res : ", res)
  return res
}

export default signinAPI
