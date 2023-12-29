import "./Navbar.css"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <>
        <div>
            <header>
                <nav>
                    <div className="NavInfo"> 
                    <a href="#">Homeowners</a>
                    <a href="#">Vendors</a>
                    </div>

                    <div>
                        <img className="logo" src={logo} alt="nav-logo"/>
                    </div>

                    <div className="NavInfo"> 
                        <a href="#">Sign In</a>
                        <a href="#">Sign Up</a>
                    </div>
                </nav>
            </header>
        </div>
    </>
  )
}
export default Navbar