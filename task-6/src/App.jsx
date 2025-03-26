import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import { LoginContext } from './context/LoginContext'
import Profile  from './component/Profile'

function App() {
  const [userName, setUserName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
   
    <>
      <div className='App'>
        <LoginContext.Provider value={{userName, setUserName, setLoggedIn}}>
          {loggedIn ? <Profile/> : <Login/>}
        </LoginContext.Provider>
      </div>
    </>
  )
}

export default App
