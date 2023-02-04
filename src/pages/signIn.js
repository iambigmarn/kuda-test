import React, { useEffect, useState } from "react";
import { HeaderTwo } from "../components/headerTwo";
import "../assets/signIn.css";
import PasswordIcon from "../components/svg/passwordIcon";
import KudaDashboard from "../components/svg/kudaDashboard";
import GlobeSkeleton from "../components/svg/globeSkeleton";

export const SignIn = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.title = 'Kuda. - Money App for Africans';
        setIsVisible(true);
      }, []);

    return(
        <div className="">
            <div className="signInWrapper">
                <div className="signInEntry">
                    <HeaderTwo />
                    <div className="signInDiv">
                        <div className="defaultView signInContainer defaultLayout">
                            <div className="signInSection signInClass flex align-center">
                                <div className={`fadeInUp signInWrap ${isVisible ? 'animate' : ''}`}>
                                    <div className="signInCardWrapDiv bgBlue signInCardWrapClass signInCardWrap logInWraps margin-bottom-3">
                                        <div className="signInHeaderWrap color-primary text-sm">
                                            <div className="signInHeaderWrap1 signInHeaderWrap2">
                                                <p> Please check that you are visiting the correct URL <br></br>
                                                    <a href="https://app.kuda.com" className="text-xlbold color-secondary">
                                                        https://app.kuda.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="signInCardWrapDiv signInCardWrapDivClass signInCardWrap logInWrap">
                                        <div className="signInHeaderWrap color-black margin-bottom-3">
                                            <div className="signInHeaderWrap1 signInH4">
                                                <h4 className="h4Bold">Sign In to Kuda</h4>
                                            </div>
                                        </div>
                                        <div className="signInHeaderWrap  margin-bottom-4">
                                            <div className="signInHeaderWrap1 signInP">
                                                <p className="signInP">To sign in, please type in the email address linked to your Kuda account.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="inputClass inputDiv mobileInput">
                                                <label className="formLabel color-black"> Email Address </label>
                                                <div className="normalInputWrap flex">
                                                    <input className="amountInput normalInput" placeholder="example@gmail.com" type="email" name="email"/>
                                                </div>
                                            </div>
                                            <div className="inputClass inputDiv mobileInput">
                                                <label className="formLabel color-black ">Password</label>
                                                <div className="normalInputWrap flex ">
                                                    <input className="amountInput normalInput" placeholder="••••••••••" type="password" name="password" autoComplete="false"/>
                                                    <div className="passwordBox">
                                                        <PasswordIcon/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="forgetLabel text-semi-bold">
                                            Forgot Password? 
                                            <a className="color-primary" href="#"> Reset it
                                            </a>
                                        </div>
                                        <div className="margin-top-4 flex">
                                            <div className="kuda-button--wrap">
                                            <button type="solid" disabled="" width="152px" className="signInBtnClass signInBtn">
                                                Sign In
                                            </button>
                                            </div>
                                        </div>
                                        <p className="text-xs disclaimer">
                                            If you don't have a Kuda account, download the app
                                            <a className="color-primary text-bold" href="#" rel="noopener noreferrer"> here
                                            </a> and open an account in a few minutes.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex signInGlobeSkeleton">
                                    <KudaDashboard/>
                                </div>
                            </div>
                        </div>
                        <div className="signInGlobeIllustration flex">
                            <GlobeSkeleton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}