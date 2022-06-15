import * as React from "react";
import {Component} from "react";
import './js_css/WhatAreWe.css';

class WhatAreWe extends Component {
    render() {
        return (
            <div className='box one' id="home">
                <div className="text">
                    <div>
                        <span className="title">
                            Share moments, share music.
                        </span>
                    </div>
                    <div>
                        <span className="sub-title">
                            The music platform that brings everyone together.
                        </span>
                    </div>
                </div>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
        );
    }
}

export default WhatAreWe