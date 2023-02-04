import React, { Component } from 'react';
import KudaBadge from './svg/kudaBadge';
import Stars from './svg/stars';

class GetApp extends Component {
    render() {
        return (
            <div>
                <div className="getMobileApp">
                    <div className="mobileRatings flex align-center justify-between column--100">
                        <div className="flex align-center">
                            <div className="kudaBadge">
                                <KudaBadge/>
                            </div>
                            <div className="appStars">
                                <p className="appName card-main--heading no-margin--bottom text-xbold color-primary">
                                Kuda.
                                </p>
                                <div className="starSvg">
                                    <Stars/>
                                </div>
                            </div>
                        </div>
                        <a href="https://kuda.onelink.me/abUI/344e3dde/" className="buttonCTA" rel="noopener noreferrer" target="_blank">
                            Get the App
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetApp;
