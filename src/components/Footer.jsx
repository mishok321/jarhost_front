import "../scss/Footer.scss"
import footerLogo from '../assets/logo_light.svg';
import instagramIcon from '../assets/logo_inst.svg'
import facebookIcon from '../assets/logo_fb.svg'
import tiktokIcon from '../assets/logo_tt.svg'

export default function Footer() { 
    return (<footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer__info col-lg-2 col-12">
                    <img className="footer__info-img" src={footerLogo} alt="trizub" />
                    <h4 className="footer__info-text">Lorem ipsum dolor sit amet consetetur</h4>
                </div>
                <div className="footer__navigation col-lg-3 col-12">
                <div className="footer__navigation_container">
                    <h5 className="footer__navigation-title">
                        Pages
                    </h5>
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">Jars</a></li>
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">Partners</a></li>
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">About us</a></li>   
                    </ul>
                    </div>
                    <div className="footer__navigation_container">
                    <h5 className="footer__navigation-title">
                        Pages
                    </h5>
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">Contact</a></li>
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">Blog</a></li>
                    </ul>
                    </div>
                    <div className="footer__navigation_container">
                    <h5 className="footer__navigation-title">
                        Other
                    </h5>
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">FAQ</a></li>
                        <li className="footer__navigation-item"><a className="footer__navigation-link" href="/#">Terms</a></li>
                    </ul>
                    </div> 
                </div>
               


                <div className="footer__social col-lg-4 col-12">
                    <h5 className="footer__social-title">Social media</h5>
                        <ul className="footer__social-list">
                            <li className="footer__social-item">
                                <img className="footer__social-icon" src={instagramIcon} alt="inst" />
                            <div className="footer__social-labelwrapper">
                                <h6 className="footer__social-label"><a className="footer__social-link" href="/#">Instagram</a></h6>
                            </div>
                            </li>
                            <li className="footer__social-item">
                                <img className="footer__social-icon" src={facebookIcon} alt="facebook" />
                            <div className="footer__social-labelwrapper">
                                <h6 className="footer__social-label"><a className="footer__social-link" href="/#">Facebook</a></h6>
                            </div>
                            </li>
                            <li className="footer__social-item">
                                <img className="footer__social-icon" src={tiktokIcon} alt="tiktok" />
                            <div className="footer__social-labelwrapper">
                                <h6 className="footer__social-label"><a className="footer__social-link" href="/#">TikTok</a></h6>
                            </div>
                            </li>
                        </ul>
                </div>
            
                <div className="footer__contact col-lg-3 col-12">
                    <h4 className="footer__contact-title">
                        Contact us
                    </h4>
                    <h5 className="footer__contact-mail">
                        frontoxic@gmail.com
                    </h5>
                    <button className="footer__contact-send">Send email</button>
                </div>
            </div>
            <div className="row">
            <div className="footer__copyright-container col-12">
                    <p className="footer__copyright-text">&copy; 2023 JarHost. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>)
}


