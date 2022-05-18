import * as React from "react";
import {Component} from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import './HeaderNavbar.css';

class HeaderNavbar extends Component {
    render() {
        return (
            <Navbar className="myNavbar" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt="Logo Citrus Andriessen"
                        src="/Images/CitrusAndriessen.png"
                        className="logo"
                        width="225"
                        height="56"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleButton"/>
                <Navbar.Collapse style={{height: "80px"}}>
                    <div className="mr-auto"/>
                    <Nav className="nav-menu">
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HeaderNavbar