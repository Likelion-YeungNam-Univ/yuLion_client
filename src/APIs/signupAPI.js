import axios from "axios";

const signupAPI = async(data) => {
  console.log('signupAPI Call : ', data)
  const res = await axios.post( 
    '/api/v1/auth/signup',
    data,
  )
  console.log("signupAPI res : ", res)
  return res
}

export default signupAPI
