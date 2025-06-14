import { Link } from "react-router-dom";


const Navbar = () => {
  return(
    <div>
      <nav id = "navbar">
        <Link className="navbar-item" to="/">Home</Link> 
        <Link className="navbar-item" to="/resume">Profile</Link> 
        <Link className="navbar-item" to="/projects">Projects</Link> 
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/blog">Blog</Link> 
      </nav>
    </div>
  )
}
  
export default Navbar