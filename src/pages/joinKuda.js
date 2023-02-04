import React, { useState, useEffect, useRef } from "react";
import 'animate.css/animate.min.css';
import { HeaderOne } from "../components/headerOne";
import { Footer } from "../components/footer";
import "../assets/joinKuda.css";
import AppStoreBadge from "../components/svg/appStoreBadge";
import GooglePlayBadge from "../components/svg/googlePlayBadge";
import QRCode from "../components/svg/qRCode";
import KudaIcon from "../components/svg/kudaIcon";
import PrintIcon from "../components/svg/printIcon";
import NairaIcon from "../components/svg/nairaIcon";
import GetApp from "../components/getApp";

export const JoinKuda = () => {

    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [onScroll, setScroll] = useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const elementPosition = elementRef.current.getBoundingClientRect().top;
    
        if (!onScroll && elementPosition <= windowHeight) {
            setScroll(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

    useEffect(() => {
        document.title = 'Download Kuda | The Money App for Africans';
        setIsVisible(true);
      }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return(
        
        <div className="">
            <HeaderOne />
            <div className="joinKudaView container">
                <div className="defaultEntryFold overflow-visible fade-active">
                    <div className="defaultEntryInner flex justify-between align-center">
                        <div className={` fadeInUp bodySection50 ${isVisible ? 'animate' : ''}`} >
                            <div className="homeMainWrap text">
                                <h1 className="text-xl bodyMainHeading text-xlbold color-primary title-bottom--spacing">
                                    Download Kuda, open an account!
                                </h1>
                                <p className="cardMainHeading text-semi-bold color-black title-bottom--spacing mobileOnly">
                                    We’re here to help you get the best out of your money, no strings
                                    attached. Welcome to your freedom!
                                </p>
                                <p className="cardMainHeading text-semi-bold color-black title-bottom--spacing deskTopOnly">
                                    Scan the QR code below with your phone camera to download the Kuda
                                    app.
                                </p>
                                <div className="mobileAppBadges flex align-center mobileOnly bottom--spacing">
                                    <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer" className="singleBadge">
                                        <AppStoreBadge/>
                                    </a>
                                    <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer" className="singleBadge">
                                        <GooglePlayBadge/>
                                    </a>
                                </div>
                                <div className="qRCodeWrap">
                                    <div>
                                        <QRCode/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`fadeInUp bodySection50 ${isVisible ? 'animate' : ''}`} >
                            <div className="bodyIllustrationCenter">
                                <img src="https://kuda.com/static/kuda-open-account-f4e3470032362b8f5751a7254f173bcf.png" alt="kuda Microfinance Bank Savings, Spend, Budgeting."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodyBelowFold color-primary ">
                    <div className="bodyBelowInner">
                        <div ref={elementRef} className={`defaultSummaryCards flex defaultSummaryTop justify-between bodySectionInner fadeInUp ${onScroll ? 'animate' : ''}`}>
                            <div className="card cardItem">
                                <div className="cardIconSpacing">
                                    <KudaIcon/>
                                </div>
                                <p className="text-xlbold">
                                    Download Kuda on Google Play or the App Store.
                                </p>
                            </div>
                            <div className="card cardItem">
                                <div className="cardIconSpacing">
                                    <PrintIcon/>
                                </div>
                                <p className="text-xlbold">
                                    Open the app and follow the prompts on your screen to open an
                                    account.
                                </p>
                            </div>
                            <div className="card cardItem">
                                <div className="cardIconSpacing">
                                    <NairaIcon/>
                                </div>
                                <p className="text-xlbold">
                                    Add money to your account to get the best out of Kuda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <GetApp/>
        </div>
    );
}