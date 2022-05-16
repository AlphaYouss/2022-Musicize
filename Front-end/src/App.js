import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <div className="App">
    <div class="main-container">
      <div class="background-image"></div>
      <div class="mobile-bg-image"></div>
      <header>
        <div class="menu">
          <a href="index.html"><img src="https://i.ibb.co/2yV3VsL/logo.png" alt="Logo" /></a>
          <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <nav>
            <a href="#">Premium</a>
            <a href="#">Help</a>
            <a href="#">Download</a>
            <div class="divider"></div>
            <a href="#" class="sign-up">Sign up</a>
            <a href="#" class="log-in">Log in</a>
          </nav>
        </div>
      </header>
      <div class="content">
        <h1>Music for everyone.</h1>
        <p>Millions of songs. No credit card needed.</p>
        <a href="#">GET SPOTIFY FREE</a>
      </div>
    </div>
    <footer>
      <div class="footer">
        <img src="https://i.ibb.co/2yV3VsL/logo.png" alt="Logo" />
        <div class="column">
          <ul>
            <li class="">COMPANY</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">For the record</a></li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li class="">COMMUNITIES</li>
            <li><a href="#">For Artists</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Vendors</a></li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li class="">USEFUL LINKS</li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Web Player</a></li>
            <li><a href="#">Free Mobile App</a></li>
          </ul>
        </div>
        <div class="socials">
          <a class="social-icon" href="#"><span><i class="fab fa-instagram"></i></span></a>
          <a class="social-icon" href="#"><span><i class="fab fa-twitter"></i></span></a>
          <a class="social-icon" href="#"><span><i class="fab fa-facebook-f"></i></span></a>
        </div>
      </div>
      <div class="country">
        Romania<img src="https://i.ibb.co/x7R9qfT/flag.png" alt="country-flag" />
      </div>
      <div class="info">
        <div>
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
        </div>
        <div class="copyright">
          © 2020 Spotify AB
        </div>
      </div>
    </footer>
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a>
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
