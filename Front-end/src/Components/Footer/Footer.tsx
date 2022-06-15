import * as React from "react";
import {Component} from "react";
import "./js_css/Footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area footer--light">
                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>© 2022
                                        <a href="#" className="ml-5">MUSICIZE</a>. All rights reserved. Created by 
                                        <a href="#" className="ml-5">AlphaYouss</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;