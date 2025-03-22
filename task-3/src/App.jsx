import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'
import Home from './Home'
import Profile from './Profile'
import Contact from './Contact'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <NotFound/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/About',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
