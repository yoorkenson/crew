import React, { FC } from 'react';
import profile from '../assets/images/profile.svg'
import profileActive from '../assets/images/profile-active.svg'
import home from '../assets/images/home.svg'
import homeActive from '../assets/images/home-active.svg'
import plus from '../assets/images/plus.svg'

const Footer: FC = () => {
    return (
        <div className='footer'>
            <button className="footer__left footer_button">
                <img src={homeActive} alt="home" className="footer__img"/>
            </button>
            <button className="footer__plus">
                <img src={plus} alt=""/>
            </button>
            <button className="footer__right footer_button">
                <img src={profile} alt="profile" className="footer__img"/>
            </button>
        </div>
    );
};

export default Footer;