import React from "react";
import HeaderLogo from "../components/svg/headerLogo";
import "../assets/headerTwo.css";

export const HeaderTwo = () => {
    return(
        <div className="defaultHeaderWrap">
            <header className="defaultHeader auth-layout--header align-center flex">
                <div className="flex justify-between align-center column--100 defaultHeaderWrap">
                    <a className="logoBrand" href="/">
                        <HeaderLogo width={650} height={146} />
                    </a>
                    <div className="headerActions">
                        <a href="/joinKuda" className="ms-0 buttonCTA buttonCTAPrimaryLight buttonCTALg" rel="noopener noreferrer">
                            Open an Account
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}