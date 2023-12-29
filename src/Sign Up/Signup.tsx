import "./Signup.css"
import hvlogo from "../images/hvlogo.png"

const Signup = () => {
  return (
    <>
      <div className="signupcontainer">
        <form>
          <img src={hvlogo} alt="logo" />
          <h1>Sign Up</h1>
          <div>
            <p>Please fill in this form to create an account.</p>
          </div>
          <div>
            <input className="inputform" type="text" name="" placeholder="First Name" />
          </div>

          <div> 
            <input className="inputform" type="text" name="" placeholder="Last Name" />
          </div>

          <div>
            <input className="inputform" type="email" name="" placeholder="Email" />
          </div>

          <div>
            <input className="inputform" type="password" name="" placeholder="Password" />  
          </div>

          <div>
            <input className="inputform" type="password" name="" placeholder="Confirm Password" />
          </div>

          <div>
            <input className="checkbox" type="checkbox" name="" /> I accept the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
          </div>

          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Signup