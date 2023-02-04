import React, { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { FiX } from "react-icons/fi";
import HeaderLogo from "./svg/headerLogo";
import "../assets/headerOne.css";
import DropDown from "./svg/dropDown";
import CardIcon from "./svg/cardIcon";
import InvestmentIcon from "./svg/investmentIcon";
import SpendIcon from "./svg/spendIcon";
import SaveIcon from "./svg/saveIcon";
import BudgetIcon from "./svg/budgetIcon";
import BorrowIcon from "./svg/borrowIcon";
import PaymentsIcon from "./svg/paymentsIcon";
import AccountsIcon from "./svg/accountsIcon";
import GlobeIcon from "./svg/globeIcon";
import TimesIcon from "./svg/timesIcon";
import NigeriaIcon from "./svg/nigeriaIcon";
import UKIcon from "./svg/uKIcon";
import GhanaIcon from "./svg/ghanaIcon";
import UgandaIcon from "./svg/ugandaIcon";

export const HeaderOne = () => {

    const [dropdown1Visible, setDropdown1Visible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);
    const [dropdown3Visible, setDropdown3Visible] = useState(false);
    const [dropdown4Visible, setDropdown4Visible] = useState(false);
    const [isOpen, setOpen] = useState(false);

    return(
        <div className="">
            <div className="defaultEntryWrap">
                <header className="defaultHeader align-center flex">
                    <div className="flex justify-between align-center column100 defaultHeaderWrap">
                        <div className="defaultMainHeader flex align-center">
                            <a aria-current="page" exact="true" className="logoBrand" href="/">
                                <HeaderLogo/>
                            </a>
                            <ul className="defaultMenuWrap flex align-center">
                                <li className="defaultNavMenu" style={{zIndex: 999999}} onMouseLeave={() => setDropdown1Visible(false)} data-toggle="dropdown" onMouseEnter={() => setDropdown1Visible(true)}>
                                    <a href="#" className="color-primary noLink">
                                        Features
                                        <span className="dropDown">
                                            <DropDown/>
                                        </span>
                                    </a>
                                    <div className="dropDownMenu" style={{ visibility: dropdown1Visible ? 'visible' : 'hidden',  top: dropdown1Visible ? '45px' : '75px', opacity: dropdown1Visible ? 1 : 0 ,
                            transition: "all 0.2s ease-in-out",}}>
                                        <ul className="defaultDropDownMenu dropMinWidth">
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <CardIcon/>
                                                    </span>
                                                    Kuda Card
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <InvestmentIcon/>
                                                    </span>
                                                    Investments
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <SpendIcon/>
                                                    </span>
                                                    Spend
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <SaveIcon/>
                                                    </span>
                                                    Save
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <BudgetIcon/>
                                                    </span>
                                                    Budget
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <BorrowIcon/>
                                                    </span>
                                                    Borrow
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <PaymentsIcon/>
                                                    </span>
                                                    Payments &amp; Transfers
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    <span className="menuLinkIcon">
                                                        <AccountsIcon/>
                                                    </span>
                                                    Account
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <div onMouseLeave={() => setDropdown1Visible(false)} style={{position: dropdown1Visible ? 'fixed' : 'relative', opacity: dropdown1Visible ? 1 : 0,
                                transition: "all 0.2s ease-in-out", top: 0,left: 0,right: 0,bottom: 0, backgroundColor: 'rgb(64 25 109 / 20%)', }} />
                                
                                <li className="defaultNavMenu">
                                    <a className="color-primary" href="#">
                                        Business<span className="comingSoon">Beta</span>
                                    </a>
                                </li>
                                <li className="defaultNavMenu" style={{zIndex: 999999}} data-toggle="dropdown"  onMouseEnter={() => setDropdown2Visible(true)} onMouseLeave={() => setDropdown2Visible(false)}>
                                    <a  href="#" className="color-primary noLink">
                                        Company
                                        <span className="dropDown">
                                            <DropDown/>
                                        </span>
                                    </a>
                                    <div className="dropDownMenu" style={{ visibility: dropdown2Visible ? 'visible' : 'hidden',  top: dropdown2Visible ? '45px' : '75px', opacity: dropdown2Visible ? 1 : 0 ,
                            transition: "all 0.2s ease-in-out",}}>
                                        <ul className="defaultDropDownMenu">
                                            <li>
                                                <a href="https://joinkuda.medium.com/" target="_blank" rel="noopener noreferrer" className="menuLink">
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="/press/"> Press </a>
                                            </li>
                                            <li>
                                                <a href="https://kuda.workable.com/" target="_blank" rel="noopener noreferrer" className="menuLink">
                                                    Join Our Team
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="/about/">
                                                    About Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <div style={{position: dropdown2Visible ? 'fixed' : 'relative', opacity: dropdown2Visible ? 1 : 0,
                                transition: "all 0.2s ease-in-out", top: 0,left: 0,right: 0,bottom: 0, backgroundColor: 'rgb(64 25 109 / 20%)', }} />
                                
                                <li className="defaultNavMenu" style={{zIndex: 999999}} data-toggle="dropdown" onMouseEnter={() => setDropdown3Visible(true)} onMouseLeave={() => setDropdown3Visible(false)}>
                                    <a className="color-primary noLink" href="#" to="/help">
                                        Help
                                        <span className="dropDown">
                                            <DropDown/>
                                        </span>
                                    </a>
                                    <div className="dropDownMenu global-overlays" style={{ visibility: dropdown3Visible ? 'visible' : 'hidden',  top: dropdown3Visible ? '45px' : '75px', opacity: dropdown3Visible ? 1 : 0 ,
                            transition: "all 0.2s ease-in-out",}}>
                                        <ul className="defaultDropDownMenu">
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer" className="menuLink">
                                                    Get Help
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    FAQs
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    Security
                                                </a>
                                            </li>
                                            <li>
                                                <a className="menuLink" href="#">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <div style={{position: dropdown3Visible ? 'fixed' : 'relative', opacity: dropdown3Visible ? 1 : 0,
                                transition: "all 0.2s ease-in-out", top: 0,left: 0,right: 0,bottom: 0, backgroundColor: 'rgb(64 25 109 / 20%)', }} />
                            </ul>
                        </div>
                        <div className="defaultHeaderExtras flex align-center">
                            <a href="/signIn" rel="noopener noreferrer" className="text-bold buttonCTAWide headerOneNav color-primary">
                                Sign In
                            </a>
                            <a className="buttonCTA btn-m btn-primary-color btn-full ms-0" href="/joinKuda">
                                Join Kuda
                            </a>
                        </div>
                        <div className="defaultNavMenu headerLeftMargin" data-toggle="dropdown"  style={{zIndex: 999999}} onMouseEnter={() => setDropdown4Visible(true)}>
                            <div className="color-primary noLink flex align-center" to="#">
                                <div className="dropDown flex global-drop">
                                    <GlobeIcon/>
                                </div>
                            </div>
                            <div className="dropDownMenu" style={{left: 'auto', right: 0, visibility: dropdown4Visible ? 'visible' : 'hidden',  top: dropdown4Visible ? 0 : '55px', opacity: dropdown4Visible ? 1 : 0 ,
                                transition: "all 0.2s ease-in-out",}} >
                                <div  className="flex headerGlobalMenu headerGlobalMenuMobile" onMouseLeave={() => setDropdown4Visible(false)}>
                                    <div className="headerGlobalMenuWrap headerGlobalDisplayWrapMobile">
                                        <div className="closeModal" style={{zIndex: 999999, opacity: .35, top: 5, left: 4 }} onClick={() => setDropdown4Visible(false)}>
                                            <TimesIcon width={20} height={20} />
                                        </div>
                                        <div className="headerGlobalIllustration title-bottom--spacing">
                                            <GlobeIcon/>
                                        </div>
                                        <div>
                                            <div>
                                                <p className="text-normal color-black title-bottom--spacing">
                                                    You’re currently on our Global page.
                                                </p>
                                                <p className="text-normal color-black">
                                                    Choose another country or region to see content specific to
                                                    your location or stay here.
                                                </p>
                                            </div>
                                            <div className="linkDecoration cursor-pointer learnMore color-primary">
                                                Stay here
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="defaultDropDownMenu countryDropDown defaultDropDownMenuMobile">
                                        <li style={{ backgroundColor: "rgba(151, 151, 151, 0.1)" }}>
                                        <a aria-current="page" exact="true" className="menuLink" href="#">
                                            <span className="leadMenuItem">
                                            <span className="menuLinkIcon green-dot">
                                                <img src="https://kuda.com/static/globe-dce6446fa35f510022c1b9bed9ed80b6.svg" alt="logo" />
                                            </span>
                                                Global
                                            </span>
                                        </a>
                                        </li>
                                        <li>
                                            <a exact="true" className="menuLink" href="#">
                                                <span className="leadMenuItem">
                                                <span className="menuLinkIcon">
                                                    <NigeriaIcon/>
                                                </span>
                                                    Nigeria
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a exact="true" className="menuLink" href="#">
                                                <span className="leadMenuItem">
                                                <span className="menuLinkIcon">
                                                    <UKIcon/>
                                                </span>
                                                    United Kingdom
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a exact="true" className="menuLink">
                                                <span className="leadMenuItem disabled">
                                                <span className="menuLinkIcon">
                                                    <GhanaIcon/>
                                                </span>
                                                    Ghana
                                                </span>
                                                <span className="comingSoon">Coming Soon</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a exact="true" className="menuLink">
                                                <span className="leadMenuItem disabled">
                                                <span className="menuLinkIcon">
                                                    <UgandaIcon/>
                                                </span>
                                                    Uganda
                                                </span>
                                                <span className="comingSoon">Coming Soon</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div onClick={() => setDropdown4Visible(false)} style={{zIndex: 1, position: dropdown4Visible ? 'fixed' : 'relative', opacity: dropdown4Visible ? 1 : 0,
                                transition: "all 0.2s ease-in-out", top: 0,left: 0,right: 0,bottom: 0, backgroundColor: 'rgb(64 25 109 / 10%)', }} />
                            </div>
                        </div>
                        <div className="mobileToggle">
                            <div className="menuHamburger">
                                <HiBars2 onClick={() => setOpen(!isOpen)} style={{ fontSize: '27px', color: '#40196d' }} />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            {isOpen && (
                <div className="defaultMobileMenu">
                    <div className="defaultMobileContainer">
                        <div className="defaultMenuWrap flex align-center">
                            <div className="defaultFooterNav flex flex-column">
                                <div className="headerMobileBrand">
                                <a aria-current="page" className="logoBrand" href="/">
                                    <HeaderLogo width={99} height={22} />
                                </a>
                                <span className="closeMenu animate fadeIn">
                                    <FiX className="react-icons" onClick={() => setOpen(false)} style={{ fontSize: '27px', color: '#40196d', }} />
                                </span>
                                </div>
                                <div className="headerOneMenuActions flex">
                                    <a href="/signIn" rel="noopener noreferrer" className="headerOneMenuAction buttonCTA buttonCTAMd">
                                        Sign In
                                    </a>
                                    <a href="#" className="ms-3 headerOneMenuAction buttonCTA buttonCTAMd buttonCTAPrimaryLight">
                                        Business
                                    </a>
                                </div>
                                <div className="headerMobileNavWrap ">
                                    <div className="headerColWrap flex flex-wrap justify-content-between">
                                        <div className="headerFooterCol">
                                            <div>
                                                <p className="footerHeader text-bold color-primary">
                                                    Features
                                                </p>
                                                <ul className="headerFooterMenu color-black">
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <CardIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Kuda Card</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <InvestmentIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Investments</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <SpendIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Spend</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <SaveIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Save</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <BudgetIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Budget</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <BorrowIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Borrow</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <PaymentsIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Payments &amp; Transfers</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex align-center" href="#">
                                                            <span className="menuLinkIcon">
                                                                <AccountsIcon width={25} height={25}/>
                                                            </span>
                                                            <span>Account</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="headerOneFooterCol headerColumn">
                                            <div>
                                                <p className="footerHeader text-bold color-primary">Company</p>
                                                <ul className="headerFooterMenu color-black">
                                                    <li>
                                                        <a href="#">
                                                            Blog
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Press</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Join Our Team
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">About Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="headerFooterCol headerColumn">
                                            <div>
                                                <p className="footerHeader text-bold color-primary">Help</p>
                                                <ul className="headerFooterMenu color-black">
                                                    <li>
                                                        <a href="#">
                                                            Get Help
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">FAQs</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Security</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}
