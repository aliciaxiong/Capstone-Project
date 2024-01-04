import "./Navbar.css"
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useState, useEffect } from "react"
import signouticon from "../images/signouticon.png"
import { useNavigate } from "react-router-dom"

interface IUser {
    email: string,
}

function Navbar() { 
    const [user, setUser] = useState<IUser>({
        email: "",
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (typeof user.email === "string") {
                    setUser({
                        email: user.email
                    })
                }
            } else {
                setUser({
                    email: "",
                })
            }       
    })
        return () => unsubscribe();
    }, [])
    
const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Signed Out Successfully")
            setUser({
                email: "",
            })
            navigate("/");  
        })
        .catch((error) => {
            console.log(error)
        })
    };
    return (
        <nav className="nav-bar">
            {user.email ? (
                <>
                <div className="NavInfo">
                    <Link to="/search">Search</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/">
                        <img className="logo" src={logo} alt="nav-logo"/>
                    </Link>
                    <Link to="/about">About</Link>
                    <img className="signout-button" src={signouticon} alt="Sign Out" onClick={handleSignOut}/>
                </div>
                </>
            ) : (
                <>
                <div className="NavInfo">
                    <Link to="/homeowners">Homeowners</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">
                        <img className="logo" src={logo} alt="nav-logo"/>
                    </Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;