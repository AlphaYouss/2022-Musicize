import * as React from "react";
import {Component} from "react";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import WhatAreWe from "../../Atoms/WhatAreWe/WhatAreWe";
import WhatWeDo from "../../Atoms/WhatWeDo/WhatWeDo";
import Login from "../../Atoms/Login/Login";

class DefaultPage extends Component{

    componentDidMount() {
        document.title="Musicize | Home";
    }

    render() {
        return (
            <div className="page-container">
                <HeaderNavbar/>
                <WhatAreWe/>
                <WhatWeDo/>
                <Login/>
                <div className="four" id="contact"></div>
                <Footer/>
            </div>
        );
    }
}

export default DefaultPage