import React, { Component } from 'react';

class GhanaIcon extends Component {
    render() {
        return (
            <svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                <circle
                    opacity="0.3"
                    cx={15}
                    cy={15}
                    r={15}
                    fill="#FCD116"
                />
                <mask
                    id="cmask0_37774_3479_a"
                    maskUnits="userSpaceOnUse"
                    x={6}
                    y={7}
                    width={18}
                    height={16}
                    style={{ maskType: "alpha" }}
                >
                    <rect
                    x="6.91406"
                    y="7.29736"
                    width="16.1724"
                    height="15.4023"
                    rx={3}
                    fill="#E94D1E"
                    />
                </mask>
                <g mask="url(#cmask0_37774_3479_a)">
                    <g clipPath="url(#clip0_37774_3479_a)">
                    <path
                        d="M2.03125 5.89795H28.0312V23.2313H2.03125V5.89795Z"
                        fill="#006B3F"
                    />
                    <path
                        d="M2.03125 5.89795H28.0312V17.4535H2.03125V5.89795Z"
                        fill="#FCD116"
                    />
                    <path
                        d="M2.03125 5.89795H28.0312V11.6757H2.03125V5.89795Z"
                        fill="#CE1126"
                    />
                    <path
                        d="M15.0299 11.6758L16.9071 17.4536L11.9922 13.8826H18.0675L13.1527 17.4536L15.0299 11.6758Z"
                        fill="black"
                    />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_37774_3479_a">
                    <rect
                        width={26}
                        height="17.3333"
                        fill="white"
                        transform="translate(2.03125 5.89795)"
                    />
                    </clipPath>
                </defs>
                </svg>
        );
    }
}

export default GhanaIcon;
