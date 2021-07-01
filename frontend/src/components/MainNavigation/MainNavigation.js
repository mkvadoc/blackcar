import React from 'react';
import logo from 'assets/images/logo.png';
import { phoneNumber, email, fb_link, insta_link } from 'constants/common';
import DrawerToggleButton from 'components/SideDrawer/DrawerToggleButton';
import { NavLink } from 'react-router-dom';
import AuthContext from 'context/auth-context';

const MainNavigation = props => (
    <AuthContext.Consumer>
        {context => {
            return (
                <header className="MainNavigation">
                    <img className="Logo" src={logo} alt="/" />

                    <div className="Navigation">
                        <ul>
                            {!context.token && (
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink to="/cars">Cars</NavLink>
                            </li>
                            {context.token && (
                                <React.Fragment>
                                    <li>
                                        <NavLink to="/booking">Bookings</NavLink>
                                    </li>
                                    <li>
                                        <button onClick={context.logout}>Logout</button>
                                    </li>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>

                    <div className="SocialContact">
                        <div className="Social">
                            <a href={fb_link}><i className="fab fa-facebook-square"></i></a>
                            <a href={insta_link}><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className='Contact'>
                            <p className="fas fa-phone"> {phoneNumber}</p>
                            <p className="far fa-envelope"> {email}</p>
                        </div>
                    </div>

                    <div className="DrawerToggleButton">
                        <DrawerToggleButton click={props.drawerClickHandler} />
                    </div>
                </header >
            )
        }}



    </AuthContext.Consumer>
);

export default MainNavigation;
