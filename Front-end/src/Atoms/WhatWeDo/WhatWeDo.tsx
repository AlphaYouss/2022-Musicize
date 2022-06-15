import * as React from "react";
import {Component} from "react";
import './js_css/WhatWeDo.css';

class WhatWeDo extends Component {
    render() {
        return (
            <div className="two" id="about">
                <div>
                    <h2 className="WhatWeDo">
                        What do we provide?
                    </h2>
                    <div>
                        <p className="item">Tired of having to switch apps to be able to listen to your music? We have created an application for all your music, bringing all music platforms closer to each other. All of your music in 1 place, accessible anywhere at any time.</p>
                        <p className="item item-1">- Paired with Spotify, with others in the future like SoundCloud and Apple Music.</p>
                        <p className="item item-2">- Accessible with desktop and mobile.</p>
                        <p className="item item-3">- Cross-playlist support.</p>
                    </div>
                </div>
                <div className="microphone">
                    <object data="Icon.svg" className="color" />
                </div>
            </div>
        );
    }
}

export default WhatWeDo