import * as React from "react";
import {Component} from "react";
import './js_css/GoogleButton.css';

class GoogleButton extends Component {
    
  render() {
    return (
      <a className="firebaseui-idp-google flex-center--all noselect" data-provider-id="google.com" href="/google-sign-in">
        <span className="firebaseui-idp-icon-wrapper">
          <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"/>
          
        </span>
        <span className="firebaseui-idp-text firebaseui-idp-text-long">
          Sign in with Google
        </span>
        <span className="firebaseui-idp-text firebaseui-idp-text-short">Google</span>    
      </a>
    );
  }
}
export default GoogleButton;