import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultPage from "./Components/Pages/DefaultPage";
import GoogleSignInPage from "./Components/Pages/GoogleSignInPage";

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<DefaultPage/>} />
        <Route exact path="/google-sign-in" element={<GoogleSignInPage/>} />
    </Routes>
</Router>
//  <div className="App">
//     <div className="main-container">
//       <div className="background-image"></div>
//       <div className="mobile-bg-image"></div>
//       <header>
//         <div className="menu">
//           <object data="/Logo_default.svg" width="300" height="300"></object>
//           <div className="hamburger">
//             <div className="line"></div>
//             <div className="line"></div>
//             <div className="line"></div>
//           </div>
//           <nav>
//             <a href="#">Home</a>
//             <a href="#">Help</a>
//             <a href="#">Download</a>
//             <div className="divider"></div>
//             <a href="#" className="sign-up">Log in</a>
//             <a href="#" className="log-in">Webplayer</a>
//           </nav>
//         </div>
//       </header>
//       <div className="content">
//         <h1>Music for everyone.</h1>
//         <p>Millions of songs. No credit card needed.</p>
//         <a href="#">GET SPOTIFY FREE</a>
//       </div>
//     </div>
//     <footer>
//       <div className="footer">
//         <img src="https://i.ibb.co/2yV3VsL/logo.png" alt="Logo" />
//         <div className="column">
//           <ul>
//             <li className="">COMPANY</li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Jobs</a></li>
//             <li><a href="#">For the record</a></li>
//           </ul>
//         </div>
//         <div className="column">
//           <ul>
//             <li className="">COMMUNITIES</li>
//             <li><a href="#">For Artists</a></li>
//             <li><a href="#">Developers</a></li>
//             <li><a href="#">Brands</a></li>
//             <li><a href="#">Investors</a></li>
//             <li><a href="#">Vendors</a></li>
//           </ul>
//         </div>
//         <div className="column">
//           <ul>
//             <li className="">USEFUL LINKS</li>
//             <li><a href="#">Help</a></li>
//             <li><a href="#">Web Player</a></li>
//             <li><a href="#">Free Mobile App</a></li>
//           </ul>
//         </div>
//         <div className="socials">
//           <a className="social-icon" href="#"><span><i className="fab fa-instagram"></i></span></a>
//           <a className="social-icon" href="#"><span><i className="fab fa-twitter"></i></span></a>
//           <a className="social-icon" href="#"><span><i className="fab fa-facebook-f"></i></span></a>
//         </div>
//       </div>
//       <div className="country">
//         Romania<img src="https://i.ibb.co/x7R9qfT/flag.png" alt="country-flag" />
//       </div>
//       <div className="info">
//         <div>
//           <a href="#">Legal</a>
//           <a href="#">Privacy Center</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Cookies</a>
//           <a href="#">About Ads</a>
//         </div>
//         <div className="copyright">
//           © 2020 Spotify AB
//         </div>
//       </div>
//     </footer>
//   </div>
  );
}

export default App;
