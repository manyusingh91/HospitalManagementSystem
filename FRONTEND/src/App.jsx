// import React, { useContext, useEffect } from 'react'
// import "./App.css"
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Home from "./pages/Home";
// import Appointment from "./pages/Appointment";
// import AboutUs from "./pages/AboutUs";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
//  import { ToastContainer } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';
// import { Context } from './main';
// import axios from 'axios';
// import Footer from './components/Footer';


// const App = () => {
//   const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
//   useEffect( ()=>{
//     const fetchUser = async() =>{
//       try {
//         const response = await axios.get("https://hospitalmanagementsystem-1-nogo.onrender.com/api/v1/user/patient/me", { withCredentials: true});
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//       } catch (error) {
//         setIsAuthenticated(false);
//         setUser({});
//       }
//     };
//     fetchUser();
//   }, [isAuthenticated]);
//   return (
//     <>
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route path='/' element ={ <Home/>}/>
//           <Route path='/appointment' element ={ <Appointment/>}/>
//           <Route path='/about' element ={ <AboutUs/>}/>
//           <Route path='/register' element ={ <Register/>}/>
//           <Route path='/login' element ={ <Login/>}/>
//         </Routes>
//         <Footer />
//         <ToastContainer position="top-center"/>
//       </Router>
//     </>
//   )
// }

// export default App;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "https://hospitalmanagementsystem-1-nogo.onrender.com/api/v1/user/patient/logout",
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false); // ✅ update state
      setUser({});                // ✅ clear user context
      navigateTo("/login");       // ✅ redirect to login page (optional)
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <nav className={"container"}>
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(false)}>Home</Link>
          <Link to={"/appointment"} onClick={() => setShow(false)}>Appointment</Link>
          <Link to={"/about"} onClick={() => setShow(false)}>About Us</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>LOGOUT</button>
        ) : (
          <button className="loginBtn btn" onClick={() => navigateTo("/login")}>LOGIN</button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
