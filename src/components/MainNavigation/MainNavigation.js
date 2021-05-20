import React from 'react';
import logo from '../../assets/images/logo.png';

export default function MainNavigation() {
    return (
        <div className="MainNavigation">
            <img className="logo" src={logo} alt="pagelogo" />
            <div className="Navigation">
                Menu
            </div>
            <div className="Social">
                Social
            </div>
            <div className="Login">
                Login
            </div>
            <div className="DropDownMenu">
                DropDownMenu
            </div>
        </div>
    )
}
