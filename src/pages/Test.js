import React from 'react'
import getUserProfilAPI from '../APIs/getUserProfileAPI'
import refresh from '../auth/refresh'
import { useEffect, useState } from 'react'
const Test = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetch = async() => {
      try {
        const res = await getUserProfilAPI()
        setData(res.data)
      } catch (error1) {
        console.error(error1)
        console.error('getUserProfilAPI() Error. Try Refresh')
        try {
          const res = await refresh(getUserProfilAPI())
          setData(res.data)
        } catch (error2) {
          console.error(error1)
          console.error('Refresh Error')
        }
      }
    }
    localStorage.getItem('accessToken') && fetch()
  },[])


  return (
    <>
      {data && (
        <>
          <div>nickname : {data.nickname}</div>
          <div>email : {data.email}</div>
          <div>phoneNumber : {data.phoneNumber}</div>
          <div>github : {data.githubUsername}</div>
        </>
      )}
    </>
  )
}

export default Test