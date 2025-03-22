import { Link } from "react-router-dom";

function Home() {
  return(
    <div className="flex flex-col gap-2"> 
      <h1>Home page</h1>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact - Us</Link>
      <Link to="/about">About - us</Link>
    </div>

  )
}

export default Home;