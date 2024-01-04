import React, { useState } from "react";
import "./Signup.css"
import logo from "../images/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

  const navigate= useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isCheckboxChecked: false
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user.isCheckboxChecked) {
      alert("Please accept the Terms of Use and Privacy Policy");
      return;
    }

    if (user.password !== user.confirmPassword) {
      event.preventDefault();
      alert("Passwords Do Not Match");
      return;
    }

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then ((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('Account Created Successfully');
      navigate("/landing");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage =error.message;
      alert(`${errorCode}: ${errorMessage}`);
      
      alert('Sorry, there was an error creating your account. Please try again.');
    });

  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <div className="signupcontainer">
        <form className="signUp-Form" onSubmit={handleSubmit}>
          <img src={logo} alt="logo" />

          <h1 className="signUp-Header">Sign Up</h1>
          <div>
            <p className="createAcc-Notice">Complete the form below to Create Account</p>
          </div>
          <div>
            <input className="inputform" type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} />
          </div>

          <div> 
            <input className="inputform" type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} />
          </div>

          <div>
            <input className="inputform" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
          </div>

          <div>
            <input className="inputform" type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
          </div>

          <div>
            <input className="inputform" type="password" name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange} />          
          </div>
          
          <div>
            <input className="checkbox" type="checkbox" name="isCheckboxChecked" checked={user.isCheckboxChecked} onChange={(e) => setUser({...user, isCheckboxChecked: e.target.checked})}/> I accept the <Link to="/terms">Terms of Service</Link> & <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div>
            <button className="signUp-btn" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>

  )
}
export default Signup