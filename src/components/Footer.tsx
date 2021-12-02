import React, { FC, useEffect, useState } from 'react';
import profile from '../assets/images/profile.svg'
import profileActive from '../assets/images/profile-active.svg'
import home from '../assets/images/home.svg'
import homeActive from '../assets/images/home-active.svg'
import plus from '../assets/images/plus.svg'
import { Link, useHistory } from 'react-router-dom';
import { RouteNames } from '../routes';

const Footer: FC = () => {
    const history = useHistory()
    const [events, setEvents] = useState(true)
    // console.log(history)
    const path = history.location.pathname

    const pathCheck = () => {
        if (path === RouteNames.PROFILE || path === RouteNames.SETTINGS) {
            setEvents(false)
        } else {
            setEvents(true)
        }
    }

    useEffect(() => {
        pathCheck()
    }, [path])

    return (
        <div className="footer__wrapper">
            <div className='footer'>
                <Link to={RouteNames.EVENTS} className="footer__left footer_button">
                    <img src={events ? homeActive : home} alt="home" className="footer__img"/>
                </Link>
                <Link to={RouteNames.EVENT_ADD} className="footer__plus">
                    <img src={plus} alt=""/>
                </Link>
                <Link to={RouteNames.SETTINGS} className="footer__right footer_button">
                    <img src={events ? profile : profileActive} alt="profile" className="footer__img"/>
                </Link>
            </div>
        </div>
    );
};

export default Footer;