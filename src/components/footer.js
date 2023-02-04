import React from "react";
import "../assets/footer.css";
import FooterLogo from "./svg/footerLogo";
import InstagramIcon from "./svg/instagramIcon";
import LinkedInIcon from "./svg/LinkedInIcon";
import MediumIcon from "./svg/mediumIcon";
import TwitterIcon from "./svg/twitterIcon";
import YoutubeIcon from "./svg/youtubeIcon";
import FacebookIcon from "./svg/facebookIcon";

export const Footer = () => {
    return(

        <div className="">
            <footer className="footerDiv mb-5 py-4">
                <div className="container">
                    <div className="defaultFooterNav">
                        <div className="defaultFooterCol">
                            <div className="defaultFooterBrand">
                                <FooterLogo/>
                            </div>
                        </div>
                        <div className="defaultFooterCol">
                            <p className="footerHeader text-bold color-primary">Features</p>
                            <ul className="defaultFooterMenu color-black">
                                <li>
                                    <a href="#">Kuda Card</a>
                                </li>
                                <li>
                                    <a href="#">Investments</a>
                                </li>
                                <li>
                                    <a href="#">Spend</a>
                                </li>
                                <li>
                                    <a href="#">Save</a>
                                </li>
                                <li>
                                    <a href="#">Budget</a>
                                </li>
                                <li>
                                    <a href="#">Borrow</a>
                                </li>
                                <li>
                                    <a href="#">Payments &amp; Transfers</a>
                                </li>
                                <li>
                                    <a href="#">Account</a>
                                </li>
                            </ul>
                        </div>
                        <div className="defaultFooterCol">

                            <p className="footerHeader text-bold color-primary">Company</p>

                            <ul className="defaultFooterMenu color-black">
                                <li>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Press</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Join Our Team
                                    </a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="defaultFooterCol">
                            <p className="footerHeader text-bold color-primary">Help</p>
                            <ul className="defaultFooterMenu color-black">
                                <li>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
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
                        <div className="defaultFooterCol">
                            <p className="footerHeader text-bold color-primary">Transparency</p>
                            <ul className="defaultFooterMenu color-black">
                                <li>
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">
                                    Information Security Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Cookie Policy</a>
                                </li>
                                <li>
                                    <a href="#">Complaints</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerDownload mb-4 pb-2">
                        <div className="flex comingSoonDownloads">
                            <div className="appStore me-2">
                                <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://kuda.com/static/app-store-9df3d746121bcf93fcdce6bff77758b5.svg" alt="Kuda App Store"className="available"/>
                                </a>
                            </div>
                            <div className="googlePlay me-2">
                                <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://kuda.com/static/google-play-61cb4b62e2b04e3c1c5e6908b4cc7f6a.svg" alt="Kuda Google Play"className="available"/>
                                </a>
                            </div>
                            <div className="web">
                                <a href="https://app.kuda.com/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://kuda.com/static/kuda-web-77bc3dc525d8fc20bddde7f8195a4c17.svg" alt="Kuda Web Icon" className="available"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footerProductOne">
                    Products may vary by country or market.
                    </div>
                    <div className="footerContactInformation">
                        <div className="informationColumn">
                            <p className="footerHeader text-bold color-primary">Contact</p>
                            <div className="other-info">
                            <a
                                className="linkDecoration color-primary text-bold"
                                href="mailto:help@kuda.com"
                            >
                                help@kuda.com
                            </a>
                            <div className="footerConnect">
                                <div className="footerSocials">
                                <ul>
                                    <li>
                                        <a href="https://twitter.com/joinkuda/" className="footerIcon footerTwitter" target="_blank" rel="noopener noreferrer">
                                            <TwitterIcon/>
                                        </a>
                                        <a href="https://www.instagram.com/joinkuda/" className="footerIcon footerInstagram" target="_blank" rel="noopener noreferrer">
                                            <InstagramIcon/>
                                        </a>
                                        <a href="https://www.facebook.com/joinkuda/" className="footerIcon footerFacebook" target="_blank"rel="noopener noreferrer">
                                            <FacebookIcon/>
                                        </a>
                                        <a href="https://youtube.com/@joinkuda/" className="footerIcon footerYoutube" target="_blank" rel="noopener noreferrer">
                                            <YoutubeIcon/>
                                        </a>
                                        <a href="https://joinkuda.medium.com/" className="footerIcon footerMedium" target="_blank" rel="noopener noreferrer">
                                            <MediumIcon/>
                                        </a>
                                        <a href="https://www.linkedin.com/company/joinkuda/" className="footerIcon footerLinkedin" target="_blank" rel="noopener noreferrer">
                                            <LinkedInIcon/>
                                        </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="informationColumn">
                            <p className="footerHeader text-bold color-primary">Lagos</p>
                            <div className="other-info">
                                <p className="color-black">
                                    151 Herbert Macaulay Way, Yaba, Lagos,
                                    <br />
                                    Nigeria
                                </p>
                            </div>
                        </div>
                        <div className="informationColumn">
                            <p className="footerHeader text-bold color-primary">London</p>
                            <div className="other-info">
                                <p className="color-black">
                                    5 New Street Square, London, England, EC4A 3TW,
                                    <br />
                                    UK
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="defaultFooterConditions">
                        <p className="mb-4">
                            © 2023 Kuda Technologies Ltd (Company No.11472232). All rights reserved.{" "}
                        </p>
                        <p className="mb-4">
                            If you would like to find out more about which Kuda entity you receive
                            services from, please reach out to us via the in-app chat in the Kuda
                            app. Nigerian banking services offered by Kuda Microfinance Bank
                            (RC796975) with registered address at 151 - Herbert Macaulay Way, Yaba,
                            Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank
                            of Nigeria. Deposits are insured by the Nigerian Deposit Insurance
                            Corporation (NDIC).
                        </p>
                        <p>
                            UK services are offered by Kuda EMI Ltd (Company No. 13724208) with
                            registered address at 5 New Street Square, London, EC4A 3TW, United
                            Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS Limited. Modulr FS
                            Limited (Company No 09897919), is regulated by the Financial Conduct
                            Authority for issuance of electronic money under reference 900573.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
