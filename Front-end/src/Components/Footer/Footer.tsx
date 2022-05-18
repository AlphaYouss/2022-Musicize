import * as React from "react";
import {Component} from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="placecontent">
                    <span className="xahrefs"> 2022 Gradest INC </span>
                    <span> | </span>
                    <span className="xahrefs"> Alle rechten voorbehouden </span>
                    <span> | </span>
                    <a className="ahrefs" href={'https://www.citrusandriessen.nl/en/disclaimer/'}> Disclaimer </a>
                    <span> | </span>
                    <a className="ahrefs" href={'https://www.citrusandriessen.nl/en/privacy/'}> Privacy </a>
                </div>
                <div className="row" style={{fontSize: '0.9rem'}}>
                    <span className="col-12 text-white small m-0 p-0">[cluster-1] @ {process.env.REACT_APP_AXIOS_BASE_URL}</span>
                    <span className="col-12 text-white small m-0 p-0">build 1.0 ({process.env.NODE_ENV})</span>
                </div>
            </div>
        );
    }
}

export default Footer;