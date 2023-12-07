import "./Landing.css"
import landing from "../images/landing.jpeg"

const Landing = () => {
  return (
    <>
        <div className="landing0">
            <div className="landing1"> 
                <div>
                  <h1 className="LandingText1"> School's Yellow Pages </h1>
                </div>
                <div>
                  <p className="LandingText2"> Discover Your Future Education </p>
                </div>
                <img className="landingphoto" src={landing} alt="landing"/>
            </div>
        </div>

    </>
  )
}
export default Landing