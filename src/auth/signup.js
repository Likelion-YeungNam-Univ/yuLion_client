import signupAPI from "../APIs/signupAPI"

const signup = async(data) => {
  const res = await signupAPI(data)
}

export default signup