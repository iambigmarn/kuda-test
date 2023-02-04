import React, { Component } from 'react';

class KudaBadge extends Component {
    render() {
        return (
            <div>
                <svg width={50} height={50} viewBox="0 0 50 50" fill="none">
                    <path
                        d="M0 10.8496C0 4.85754 4.85754 0 10.8496 0H39.1504C45.1425 0 50 4.85754 50 10.8496V39.1504C50 45.1425 45.1425 50 39.1504 50H10.8496C4.85754 50 0 45.1425 0 39.1504V10.8496Z"
                        fill="#40196D"
                    />
                    <path
                        d="M27.653 11.8164H33.5734L23.1753 24.9409L33.8088 38.0653H27.5942L16.6077 25.4704L27.653 11.8164Z"
                        fill="white"
                    />
                    <path
                        d="M19.049 11.8164H23.1862L16.8769 25.4704L22.892 38.0653H18.4018L13.034 25.3527L19.049 11.8164Z"
                        fill="white"
                    />
                    <path
                        d="M13.2394 11.8164H15.5932L13.0679 25.3527L15.5932 38.0653H13.2394L10.7728 25.3527L13.2394 11.8164Z"
                        fill="white"
                    />
                    <path
                        d="M9.86328 11.8164H11.1829V38.0653H9.86328V11.8164Z"
                        fill="white"
                    />
                    <circle cx="37.2521" cy="35.2414" r="2.94204" fill="white" />
                    </svg>
            </div>
        );
    }
}

export default KudaBadge;
