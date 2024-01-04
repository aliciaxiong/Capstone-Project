import "./Landing.css"
import landingvideo from "../images/landingvideo.mp4"

const Landing = () => {
  return (
    <>
      <div className="landing0">

        <div className="landing1"> 
          <h1 className="LandingText1"> Home Value Spot</h1>
        </div>

        <div>
          <p className="LandingText2"> Discover A New Innovation to Protect your Home Value. Unlock your key to staying ahead! Track your home's value effortlessly, join now at Zero Cost for a smarter approach to homeownership!</p>
        </div>

          <video className="landingvideo" autoPlay loop muted>
            <source src={landingvideo} type="video/mp4"/></video>
      </div>
    </>
  )
}
export default Landing