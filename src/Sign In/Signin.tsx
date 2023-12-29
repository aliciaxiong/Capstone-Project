import "./Signin.css"
import hvlogo from "../images/hvlogo.png"

const Signin = () => {
  return (
    <>
      <div className="signincontainer">
        <form>
          <img src={hvlogo} alt="logo" />
          <h1>Sign In</h1>
          <div>
            <p>Please fill in this form to create an account.</p>
          </div>

          <div>
            <input className="inputsignin" type="email" name="" placeholder="Email" />
          </div>

          <div>
            <input className="inputsignin" type="password" name="" placeholder="Password" />  
          </div>

          <div className="ForgotPassword">
            <a href="#">Forgot Password</a>
          </div>

          <div>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Signin