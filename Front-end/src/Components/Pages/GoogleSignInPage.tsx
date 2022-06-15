import * as React from "react";
import {Component} from "react";
import './js_css/SocialLogins.js';

class GoogleSignInPage extends Component{

    componentDidMount() {
        document.title="Musicize | Google sign-in";
    }

    render() {
        return (
            <div className="page-container"/>
        );
    }
}

export default GoogleSignInPage