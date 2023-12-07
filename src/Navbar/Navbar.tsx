import "./Navbar.css"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <>
        <div>
            <header>
                <nav>
                    <div>
                        <img className="logo" src={logo} alt="nav-logo"/>
                    </div>
                    <div className="NavInfo"> 
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/signin">Sign In</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                </nav>
            </header>
        </div>
    </>
  )
}
export default Navbar