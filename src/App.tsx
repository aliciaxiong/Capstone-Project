import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect } from "react";
import Signin from "./Sign In/Signin"
import Signup from "./Sign Up/Signup"
import Landing from "./Landing/Landing"
import Navbar from "./Navbar/Navbar"
import Terms from "./Terms/Terms"
import Privacy from "./Privacy/Privacy"
import Homeowners from "./Homeowners/Homeowners"
import About from "./About/About"
import Search from "./Search/Search";
import Portfolio from "./Portfolio/Portfolio";


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user}/>
      <Routes>  
        <Route path="/about" element={<About/>} />
        <Route path="/homeowners" element={<Homeowners/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
