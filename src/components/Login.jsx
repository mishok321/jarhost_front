import React from 'react'
import '../scss/Login.scss';
import logo_light from '../assets/logo_light.svg';
export default function Login(){
    return(
        <div className="login container-fluid">
            <div className="row">
                <div className="login__first">
                    <img className="login__first-img" src={logo_light}/>
                    <div class="login__first-menu-mobile"></div>
                    <h1 className="login__first-title">UKRAINE<br/>IT’S<br/><span>HOME</span></h1>
                </div>
                <div className="login__second">
                    <div className="login__second-wrapped">
                        <h1 className="login__second-title">Sign In</h1>
                        <input type="text" className="login__second-text" placeholder="Login"/>
                        <input type="password" className="login__second-password" placeholder="Password"/>
                        <input type="button" className="login__second-button" value="Sign in"/>
                        <h6 className="login__second-sign">Sign up</h6>
                        <h6 className="login__second-all-rights-mobile">© 2023 JarHost. All rights reserved</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}