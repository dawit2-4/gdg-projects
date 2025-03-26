import React, {useContext} from 'react'
import { LoginContext } from '../context/LoginContext'

export default function Profile() {
  const {userName, setLoggedIn} = useContext(LoginContext)
  return (
    <>
    <div className='grid grid-col-1 gap-6 mb-6'>
      <h1>Profile of user:</h1> 
      <div>{userName}</div>
      <button onClick={() => {
        setLoggedIn(false)
      }}>LogOut</button>
    </div>
    </>
  )

}

