import { Link } from "react-router-dom"

export default function Profile(){
  const profile = [1,2,3,4,5]

  return(
    <div>
      <h1>Profile Page</h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}