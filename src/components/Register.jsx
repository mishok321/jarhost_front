import React from 'react';
import '../scss/Register.scss'
import logo_light from '../assets/logo_light.svg';
export default function Register(){
    return (
        <div className="register container-fluid">
            <div className="row">
                <div className="register__first">
                    <img className="register__first-img" src={logo_light}/>
                    <div className="register__first-menu-mobile"></div>
                    <h1 className="register__first-title">BE <span className="register__first-title-yellow">BRAVE</span><br/>LIKE<br/>UKRAINE</h1>
                </div>
                <div className="register__second">
                    <div className="register__second-wrapper">
                        <h2 className="register__second-title">Sign Up</h2>
                        <input className="register__second-text" type="text" placeholder="Login"/>
                        <input className="register__second-text" type="text" placeholder="Email"/>
                        <input className="register__second-password" type="password" placeholder="Password"/>
                        <input className="register__second-button" type="button" value="Sign up"/>
                        <h6 className="register__second-sign">Sign in</h6>
                        <h6 className="register__second-all-rights-mobile">© 2023 JarHost. All rights reserved</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}