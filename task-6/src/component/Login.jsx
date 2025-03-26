import React, { use, useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

function Login() {
  const {setUserName, setLoggedIn} = useContext(LoginContext)
  return (
    <div className='grid gap-6 mb-6 grid-col-1'> 
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' placeholder='Username...' onChange={(event) => {
          setUserName(event.target.value)
        }}></input>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='password' placeholder='Password'></input>
        <button onClick={()=>{
          setLoggedIn(true)
          console.log("login state", Login)
        }}>Login</button>
    </div>
    
  )
}

export default Login