import React, { useEffect, useRef, useState } from "react";
// import 'animate.css/animate.min.css';
import { HeaderOne } from "../components/headerOne";
import { Footer } from "../components/footer";
import "../assets/homePage.css";
import GooglePlayBadge from "../components/svg/googlePlayBadge";
import AppStoreBadge from "../components/svg/appStoreBadge";
import CircleIllustration from "../components/svg/circleIllustration";
import PhoneIllustration from "../components/svg/phoneIllustration";
import SaveSvg from "../components/svg/saveSvg";
import SpendSvg from "../components/svg/spendSvg";
import SendSvg from "../components/svg/sendSvg";
import InvestSvg from "../components/svg/investSvg";
import ArrowRightIcon from "../components/svg/arrowRightIcon";
import BodySectionIllustration from "../components/svg/bodySectionIllustration";
import CtaIllustration from "../components/svg/ctaIllustration";
import GetApp from "../components/getApp";

export const HomePage  = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [onScroll, setScroll] = useState(false);
    const [div1Visible, setDiv1Visible] = useState(false);
    const [div2Visible, setDiv2Visible] = useState(false);
    const [div3Visible, setDiv3Visible] = useState(false);
    const [div4Visible, setDiv4Visible] = useState(false);
    const [div5Visible, setDiv5Visible] = useState(false);
    const [div6Visible, setDiv6Visible] = useState(false);

    useEffect(() => {
        document.title = 'Kuda | The Money App for Africans | Open an Account in Minutes';
        setIsVisible(true);
      }, []);

      useEffect(() => {
        const handleScroll = () => {
          const div1 = document.querySelector('.div1Visible');
          const div2 = document.querySelector('.div2Visible');
          const div3 = document.querySelector('.div3Visible');
          const div4 = document.querySelector('.div4Visible');
          const div5 = document.querySelector('.div5Visible');
          const div6 = document.querySelector('.div6Visible');
    
          const div1Top = div1.getBoundingClientRect().top;
          const div2Top = div2.getBoundingClientRect().top;
          const div3Top = div3.getBoundingClientRect().top;
          const div4Top = div4.getBoundingClientRect().top;
          const div5Top = div5.getBoundingClientRect().top;
          const div6Top = div6.getBoundingClientRect().top;
    
          const windowHeight = window.innerHeight;
    
          if (!div1Visible && div1Top < windowHeight) {
            setDiv1Visible(true);
          }
          if (!div2Visible && div2Top < windowHeight) {
            setDiv2Visible(true);
          }
          if (!div3Visible && div3Top < windowHeight) {
            setDiv3Visible(true);
          }
          if (!div4Visible && div4Top < windowHeight) {
            setDiv4Visible(true);
          }
          if (!div5Visible && div5Top < windowHeight) {
            setDiv5Visible(true);
          }
          if (!div6Visible && div6Top < windowHeight) {
            setDiv6Visible(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [div1Visible, div2Visible, div3Visible, div4Visible, div5Visible, div6Visible]);  
	  
    return(

        <div className="">
            <HeaderOne />
            <div className="defaultPreview container">
                <div className="defaultEntryFold defaultHomeFold">
                    <div className="defaultEntryInner flex justify-between align-center">
                        <div className={`fadeInUp bodySection42 ${isVisible ? 'animate' : ''}`} >
                            <div className="homeMainWrap">
                                <h1 className="text-xl bodyMainHeading text-xlbold color-primary title-bottom--spacing">
                                    <span>
                                    The money app <br />
                                    for Africans.
                                    </span>
                                </h1>
                                <p className="cardMainHeading text-semi-bold color-black title-bottom--spacing">
                                    <span>
                                    Save, spend, send and invest money
                                    <br /> across borders.
                                    </span>
                                </p>
                                <div className="mobileAppBadges flex align-center mobileOnly bottom--spacing">
                                    <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer" className="singleBadge">
                                        <AppStoreBadge/>
                                    </a>
                                    <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer" className="singleBadge">
                                        <GooglePlayBadge/>
                                    </a>
                                </div>
                                <div className="defaultGetWrap">
                                    <a className="buttonCTA buttonCTALong mt-4 ms-0" href="/kuda-test/#/joinKuda">
                                        Join Kuda
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`fadeInUp bodySection58 ${isVisible ? 'animate' : ''}`} >
                            <div className="bodyIllustrationCenter hasAnimation">
                                <div title="" role="button" aria-label="animation" tabIndex={0} style={{width: "100%",height: "100%",overflow: "hidden", margin: "0px auto",outline: "none"}}>
                                    <CircleIllustration/>
                            </div>
                            <div className="bodyPhoneIllustration">
                                <div title="" role="button" aria-label="animation" tabIndex={0} style={{width: "100%",height: "100%",overflow: "hidden",margin: "0px auto",outline: "none"}}>
                                    <PhoneIllustration/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bodySection bodyBelowAnimation">
                    <div  className={`div1Visible bodySectionInner flex justify-between align-center fadeInUp ${div1Visible ? 'animate' : ''}`}>
                        <div className="bodySection55">
                            <div className="bodySectionWrap">
                                <h1 className="bodySectionHeading text-xlbold color-primary title-bottom--spacing">
                                    <span>Save</span>
                                </h1>
                                <p className="color-black bodySectionMax">
                                    Putting money away for the future is smart but it takes discipline -
                                    something humans don’t have in abundance. We’re using technology to
                                    solve that by automating saving. You set an amount to save and the
                                    Kuda app takes care of the rest, prompt interest payout included.
                                </p>
                            </div>
                        </div>
                        <div className="bodySection45">
                            <div className="bodySectionIllustration">
                                <div title="" role="button" aria-label="animation" tabIndex={0} style={{ width: "100%",height: "100%",overflow: "hidden",margin: "0px auto",outline: "none"}}>
                                    <SaveSvg/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodySection">
                    <div className={`div2Visible mobileReverse bodySectionInner flex justify-between align-center fadeInUp ${div2Visible ? 'animate' : ''}`}>
                    
                        <div className="bodySection55">
                            <div className="bodySectionIllustration not-centered">
                            <div title="" role="button"
                                aria-label="animation" tabIndex={0}
                                style={{ width: "100%", height: "100%", overflow: "hidden", margin: "0px auto", outline: "none"}}>
                                <SpendSvg/>
                            </div>
                            </div>
                        </div>
                        <div className="bodySection45 bodyTextRight">
                            <div className="bodySectionWrap">
                                <h1 className="bodySectionHeading text-xlbold color-primary title-bottom--spacing">
                                    Spend
                                </h1>
                                <p className="color-black bodySectionMax">
                                    Kuda gives you more than one way to pay easily, including a widely
                                    accepted debit card issued in partnership with Visa, quick web
                                    payments direct from your Kuda account, and location-based gift
                                    cards for shopping and subscriptions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodySection bodyBelowAnimation">
                <div className={`div3Visible bodySectionInner flex justify-between align-center fadeInUp ${div3Visible ? 'animate' : ''}`}>
                        <div className="bodySection55">
                            <div className="bodySectionWrap">
                                <h1 className="bodySectionHeading text-xlbold color-primary title-bottom--spacing">
                                    Send
                                </h1>
                                <p className="color-black bodySectionMax">
                                    <span>
                                    From international transfers to on-the-spot payments at market
                                    stalls, we’ve simplified sending money so you don’t need to think
                                    too much about it. <br />
                                    <br />
                                    You can find your friends on Kuda and make unlimited instant
                                    transfers free of charge, send money to local banks without
                                    breaking a sweat, or fulfil your promises to family across
                                    borders.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="bodySection45">
                            <div className="bodySectionIllustration">
                                <div title="" role="button" aria-label="animation" tabIndex={0} style={{width: "100%", height: "100%", overflow: "hidden", margin: "0px auto", outline: "none"}}>
                                    <SendSvg/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodySection">
                    <div className={`mobileReverse div4Visible bodySectionInner flex justify-between align-center fadeInUp ${div4Visible ? 'animate' : ''}`}>
                        <div className="bodySection55">
                            <div className="bodySectionIllustration not-centered">
                                <div title="" role="button" aria-label="animation" tabIndex={0} style={{width: "100%",height: "100%",overflow: "hidden",margin: "0px auto",outline: "none"}}>
                                    <InvestSvg/>
                                </div>
                            </div>
                        </div>
                        <div className="bodySection45 bodyTextRight">
                            <div className="bodySectionWrap">
                                <h1 className="bodySectionHeading text-xlbold color-primary title-bottom--spacing">
                                    Invest
                                </h1>
                                <p className="color-black bodySectionMax">
                                    <span>
                                    We’re bringing verified global investment options closer to every
                                    African with fractional shares on Kuda, giving anyone with a Kuda
                                    account the opportunity to grow their money wherever they are in
                                    the world.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodySection bodyBelowAnimation">
                    <div className={`div5Visible bodySectionInner flex justify-between align-center fadeInUp ${div5Visible ? 'animate' : ''}`}>
                        <div className="bodySection55">
                            <div className="bodySectionWrap">
                                <h1 className="bodySectionHeading text-xlbold color-primary title-bottom--spacing">
                                    We’re always happy to help you.
                                </h1>
                                <p className="color-black bodySectionMax">
                                    You can chat with us on the app, slide into our DMs, tweet, leave an
                                    Instagram comment, send an email or call. However you choose to
                                    reach out, there’ll always be a friendly person there to make your
                                    life easy.
                                </p>
                                <a href="/contact" target="_blank" rel="noopener noreferrer" className="learnMore color-primary flex align-center">
                                    <span className="learn-more--icon">Contact Us</span>
                                    <span className="arrowRightIcon">
                                        <ArrowRightIcon/>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="bodySection45">
                            <div className="bodySectionIllustration">
                                <div title="" role="button" aria-label="animation" tabIndex={0} style={{ width: "100%", height: "100%", overflow: "hidden", margin: "0px auto", outline: "none"}}>
                                    <BodySectionIllustration/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bodySection">
                    <div className={`div6Visible defaultEntryInner bodyCTASection flex justify-between align-center fadeInUp ${div6Visible ? 'animate' : ''}`}>
                        <div className="homeSection50">
                        <div className="homeMainWrap">
                            <h1 className="bodySectionHeading text-xlbold color-primary title-bottom--spacing">
                            The money app for Africans.
                            </h1>
                            <p className="color-black bottom--spacing">
                            Save, spend, send and invest money across borders.
                            </p>
                            <div className="mobileAppBadges flex align-center mobileOnly bottom--spacing">
                            <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer" className="singleBadge">
                                <AppStoreBadge/>
                            </a>
                            <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer" className="singleBadge">
                                <GooglePlayBadge/>
                            </a>
                            </div>
                            <div className="defaultGetWrap footerGlobal">
                                <a className="buttonCTA buttonCTALong mt-4 ms-0" href="/kuda-test/#/joinKuda">
                                    Join Kuda
                                </a>
                            </div>
                        </div>
                        </div>
                        <div className="homeSection50">
                            <div className="ctaIllustration">
                                <CtaIllustration/>
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