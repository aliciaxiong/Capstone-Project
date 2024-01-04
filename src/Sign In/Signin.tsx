import React, { useState } from "react";
import "./Signin.css"
import logo from "../images/logo.png"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Signin () {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate ("/landing")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    });
  
}
  return (
    <>
      <div className="signincontainer">

        <form className="signIn-Form" onSubmit={handleSubmit}>
          <img src={logo} alt="logo" />

          <h1 className="signIn-Header">Sign In</h1>

          <div>
            <input className="inputsignin" type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required/>
          </div>

          <div>
            <input className="inputsignin" type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />          </div>

          <div className="ForgotPassword">
            <p className="forgotpass">Forgot Password</p>
          </div>

          <div>
              <button className="signIn-Button" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Signin