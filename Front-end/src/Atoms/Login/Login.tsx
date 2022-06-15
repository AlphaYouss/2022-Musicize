import * as React from "react";
import {Component} from "react";
import GoogleButton from "../../Atoms/LoginMethods/GoogleButton";
import './js_css/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="three" id="work">
                <GoogleButton />
            </div>
        );
    }
}

export default Login