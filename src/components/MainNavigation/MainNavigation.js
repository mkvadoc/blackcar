import React from 'react';
import logo from '../../assets/images/logo.png';
import { phoneNumber, email } from '../../constants/common';

export default function MainNavigation() {
    return (
        <div className="MainNavigation">
        <img className="Logo" src={logo} alt="/" />
        
        <div className="Navigation"> 
        domov
        vozový park
       </div>
                
        <div className="SocialContact">
            <div className="Social">
                <a href="https://www.facebook.com/CarRentalBlackCar/?__tn__=%2Cd%2CP-R&eid=ARAnTkf92Y1Y5qtTQxBr5rbeLx2694aWlMVi24yxIZKl1fHKiqZxsm5Ve2khTBxMNRZIfb6nInwm_28R"><i className="fab fa-facebook-square"></i></a>
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fblackcar_carrental%3Figshid%3D5qcjc30yv6zd%26fbclid%3DIwAR1NVHkXYesshioIeKoVj9x_8h5WGLbdtDU1BXMeBI72tDyB3voAXu7Xeug&h=AT23LSOZr2dIghQYdp6k_Yv3rtWJDD5JDFUISw2pyP4y_N78t6HEGblt4Zr2orG6sh87-k6RdaEvXmCgt3vQillwYrmwOw58UtaPgWc87sjtR5YSNEHA1NidTR8ZoycNSw"><i className="fab fa-instagram"></i></a>
            </div>
            <div className='Contact'>
                <p className="fas fa-phone"> {phoneNumber}</p>
                <p className="far fa-envelope"> {email}</p>
            </div>
        </div>
    
    </div >
    )
}
