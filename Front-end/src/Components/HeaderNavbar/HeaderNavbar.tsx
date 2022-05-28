import * as React from "react";
import {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react'
import './js_css/HeaderNavbar.css';
import './js_css/HeaderNavbar.js';

class HeaderNavbar extends Component {
    render() {
        return (
            <header id="nav-wrapper">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;900&display=swap" rel="stylesheet"/>
                <nav id="nav">
                    <div className="nav left">
                        <span className="gradient skew"><h1 className="logo un-skew"><a href="/" className="logo">MUSICIZE</a></h1></span>
                        <button id="menu" className="btn-nav"><Hamburger direction="right" /></button>
                    </div>
                    <div className="nav right">
                        <a href="#home" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
                        <a href="#about" className="nav-link"><span className="nav-link-span"><span className="u-nav">About</span></span></a>
                        <a href="#work" className="nav-link"><span className="nav-link-span"><span className="u-nav">Work</span></span></a>
                        <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderNavbar